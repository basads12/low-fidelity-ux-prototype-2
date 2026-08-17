#!/usr/bin/env bash
#
# ralph.sh — run Claude Code in a Ralph loop against this repository.
#
# Each iteration starts a fresh, memory-less `claude -p` session with the contents of
# ralph/PROMPT.md. Continuity lives entirely in ralph/BACKLOG.md and ralph/PROGRESS.md,
# which the agent reads and updates every pass.
#
# Usage:
#   ./ralph.sh                      # 10 iterations, acceptEdits permissions
#   ./ralph.sh -n 25                # 25 iterations
#   ./ralph.sh -n 5 -s 10           # 5 iterations, 10s pause between them
#   ./ralph.sh --dry-run            # show what would run, run nothing
#
# The loop stops on whichever comes first:
#   - ralph/STOP exists (the agent creates it when the backlog is empty)
#   - no unchecked "- [ ]" items remain in ralph/BACKLOG.md
#   - the iteration cap is reached
#   - three consecutive iterations produce no commit (stall guard)
#
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_ROOT"

PROMPT_FILE="ralph/PROMPT.md"
BACKLOG_FILE="ralph/BACKLOG.md"
STOP_FILE="ralph/STOP"
LOG_DIR="ralph/logs"

MAX_ITERATIONS=10
SLEEP_SECONDS=0
PERMISSION_MODE="acceptEdits"
MODEL=""
DRY_RUN=0
MAX_STALLED=3

usage() {
  sed -n '2,20p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'
  cat <<'EOF'

Options:
  -n, --max-iterations N   Stop after N iterations (default: 10)
  -s, --sleep N            Pause N seconds between iterations (default: 0)
  -p, --prompt FILE        Prompt file to feed each iteration (default: ralph/PROMPT.md)
  -m, --model NAME         Pass --model NAME to claude
      --permission-mode M  Permission mode for claude (default: acceptEdits)
      --dry-run            Print the plan and exit without invoking claude
  -h, --help               Show this help

Note on permissions: acceptEdits still prompts for shell commands, which will stall an
unattended run. For a genuinely hands-off loop you need a broader mode, e.g.
--permission-mode bypassPermissions. Only do that in a disposable environment such as a
container or a throwaway clone: the agent can then run arbitrary commands unsupervised.
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -n|--max-iterations) MAX_ITERATIONS="${2:?missing value for $1}"; shift 2 ;;
    -s|--sleep)          SLEEP_SECONDS="${2:?missing value for $1}"; shift 2 ;;
    -p|--prompt)         PROMPT_FILE="${2:?missing value for $1}"; shift 2 ;;
    -m|--model)          MODEL="${2:?missing value for $1}"; shift 2 ;;
    --permission-mode)   PERMISSION_MODE="${2:?missing value for $1}"; shift 2 ;;
    --dry-run)           DRY_RUN=1; shift ;;
    -h|--help)           usage; exit 0 ;;
    *) echo "ralph: unknown option '$1' (try --help)" >&2; exit 2 ;;
  esac
done

if ! [[ "$MAX_ITERATIONS" =~ ^[0-9]+$ ]] || (( MAX_ITERATIONS < 1 )); then
  echo "ralph: --max-iterations must be a positive integer" >&2; exit 2
fi
if ! [[ "$SLEEP_SECONDS" =~ ^[0-9]+$ ]]; then
  echo "ralph: --sleep must be a non-negative integer" >&2; exit 2
fi

# --- preflight ---------------------------------------------------------------

command -v claude >/dev/null 2>&1 || {
  echo "ralph: the 'claude' CLI is not on PATH." >&2
  echo "       Install it from https://claude.com/claude-code and retry." >&2
  exit 1
}
git rev-parse --git-dir >/dev/null 2>&1 || {
  echo "ralph: not inside a git repository. Ralph commits after every iteration and" >&2
  echo "       needs version control to be recoverable." >&2
  exit 1
}
[[ -f "$PROMPT_FILE"  ]] || { echo "ralph: prompt file '$PROMPT_FILE' not found." >&2; exit 1; }
[[ -f "$BACKLOG_FILE" ]] || { echo "ralph: backlog file '$BACKLOG_FILE' not found." >&2; exit 1; }

if [[ -e "$STOP_FILE" ]]; then
  echo "ralph: '$STOP_FILE' exists — a previous run halted here:"
  sed 's/^/       /' "$STOP_FILE"
  echo "       Remove it to start a new run."
  exit 0
fi

count_open_items() {
  grep -cE '^[[:space:]]*- \[ \]' "$BACKLOG_FILE" 2>/dev/null || true
}

open_items="$(count_open_items)"
if [[ "${open_items:-0}" -eq 0 ]]; then
  echo "ralph: no unchecked '- [ ]' items in $BACKLOG_FILE — nothing to do."
  exit 0
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "ralph: warning — the working tree is dirty. Ralph commits after every iteration," >&2
  echo "       so your uncommitted changes will be swept into its first commit." >&2
  echo "       Commit or stash them first if you want them kept separate." >&2
  echo >&2
fi

BRANCH="$(git rev-parse --abbrev-ref HEAD)"

echo "ralph: repo         $REPO_ROOT"
echo "ralph: branch       $BRANCH"
echo "ralph: prompt       $PROMPT_FILE"
echo "ralph: open items   $open_items"
echo "ralph: iterations   up to $MAX_ITERATIONS"
echo "ralph: permissions  $PERMISSION_MODE"
[[ -n "$MODEL" ]] && echo "ralph: model        $MODEL"
echo

if [[ "$PERMISSION_MODE" == "acceptEdits" ]]; then
  echo "ralph: note — 'acceptEdits' still prompts for shell commands, so an unattended"
  echo "       run can stall waiting for input. See --help before going hands-off."
  echo
fi

if (( DRY_RUN )); then
  echo "ralph: --dry-run set, exiting without invoking claude."
  exit 0
fi

mkdir -p "$LOG_DIR"
RUN_ID="$(date +%Y%m%d-%H%M%S)"
START_COMMIT="$(git rev-parse HEAD)"

claude_args=(-p "$(cat "$PROMPT_FILE")" --permission-mode "$PERMISSION_MODE")
[[ -n "$MODEL" ]] && claude_args+=(--model "$MODEL")

# --- loop --------------------------------------------------------------------

stalled=0
exit_reason="reached the $MAX_ITERATIONS iteration cap"

for (( i = 1; i <= MAX_ITERATIONS; i++ )); do
  log_file="$LOG_DIR/${RUN_ID}-iter-$(printf '%03d' "$i").log"
  head_before="$(git rev-parse HEAD)"

  echo "── iteration $i/$MAX_ITERATIONS ── $(date '+%H:%M:%S') ── log: $log_file"

  if ! claude "${claude_args[@]}" 2>&1 | tee "$log_file"; then
    echo "ralph: claude exited non-zero on iteration $i (see $log_file)." >&2
    exit_reason="claude exited non-zero on iteration $i"
    break
  fi

  head_after="$(git rev-parse HEAD)"
  if [[ "$head_before" == "$head_after" ]]; then
    stalled=$(( stalled + 1 ))
    echo "ralph: iteration $i produced no commit ($stalled in a row)."
    if (( stalled >= MAX_STALLED )); then
      exit_reason="$MAX_STALLED consecutive iterations produced no commit — stopping to avoid spinning"
      echo "ralph: $exit_reason" >&2
      break
    fi
  else
    stalled=0
    echo "ralph: committed $(git log --oneline -1 --format='%h %s')"
  fi

  if [[ -e "$STOP_FILE" ]]; then
    exit_reason="the agent created $STOP_FILE: $(head -n1 "$STOP_FILE")"
    break
  fi

  open_items="$(count_open_items)"
  if [[ "${open_items:-0}" -eq 0 ]]; then
    exit_reason="backlog is empty"
    break
  fi
  echo "ralph: $open_items item(s) still open."

  if (( SLEEP_SECONDS > 0 && i < MAX_ITERATIONS )); then
    sleep "$SLEEP_SECONDS"
  fi
done

echo
echo "ralph: stopped — $exit_reason"

commits="$(git log --oneline "$START_COMMIT..HEAD" 2>/dev/null || true)"
if [[ -n "$commits" ]]; then
  echo "ralph: commits this run:"
  sed 's/^/       /' <<<"$commits"
  echo "ralph: review with 'git log -p $START_COMMIT..HEAD' before pushing — nothing was pushed."
else
  echo "ralph: no commits were made this run."
fi
echo "ralph: logs in $LOG_DIR/${RUN_ID}-*.log"
