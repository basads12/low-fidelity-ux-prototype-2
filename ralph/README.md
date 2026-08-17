# Ralph loop

A "Ralph loop" runs a coding agent against the same prompt over and over in a fresh
session each time. The agent has no memory between runs, so all continuity lives in
files: a backlog it works through and a journal it appends to. Each pass does one task,
verifies it, records it, commits, and exits. The loop then starts a new agent.

The technique is Geoffrey Huntley's, nicknamed after Ralph Wiggum — the point being that
a simple agent repeated many times, with good written state, gets further than one clever
attempt.

## Files

| File | Role |
| --- | --- |
| `../ralph.sh` | The runner. Starts each iteration, watches for stop conditions. |
| `PROMPT.md` | Fed verbatim to every iteration. The agent's whole instruction set. |
| `BACKLOG.md` | The work queue. Topmost unchecked `- [ ]` item is next. |
| `PROGRESS.md` | Append-only journal. The loop's only memory. |
| `STOP` | Created by the agent when the backlog empties. Halts the loop. |
| `logs/` | Per-iteration transcripts. Gitignored. |

## Running it

1. **Fill the backlog.** Replace the placeholder in `BACKLOG.md` with real tasks. Each
   one must be completable by an agent that knows nothing about your intent, so state
   acceptance criteria inline. Split anything larger than one iteration.

2. **Work on a throwaway branch.** The loop commits after every iteration.

   ```bash
   git checkout -b ralph/<what-youre-doing>
   ```

3. **Dry run first.**

   ```bash
   ./ralph.sh --dry-run
   ```

4. **Run it.**

   ```bash
   ./ralph.sh -n 10
   ```

5. **Review before pushing.** The loop never pushes and never opens a PR.

   ```bash
   git log --oneline
   git diff main...HEAD
   ```

## Permissions

The default is `--permission-mode acceptEdits`, which still prompts for shell commands —
fine when you are watching, but it will stall an unattended run.

For a hands-off loop you need a broader mode:

```bash
./ralph.sh -n 20 --permission-mode bypassPermissions
```

That lets the agent run arbitrary commands with no confirmation, unattended, for as many
iterations as you allow. Only do it somewhere disposable — a container, a VM, or a
throwaway clone — never on a machine holding credentials or work you cannot lose.

## Stop conditions

The loop halts on the first of:

- `ralph/STOP` exists — the agent creates it when the backlog empties.
- No unchecked `- [ ]` items remain in `BACKLOG.md`.
- The `-n` iteration cap is reached.
- Three consecutive iterations produce no commit. This is the stall guard: it catches an
  agent stuck failing the same task, so the run ends instead of burning tokens.

## Verification in this repo

There is no test suite here, so `PROMPT.md` points the agent at the build and lint
targets that do exist:

- Root Vite/React prototype: `npm run build`
- Next.js app: `cd kwc-art-visualizer && npm run lint && npm run build`

If you add a test runner, update the "Verify before you commit" section of `PROMPT.md` —
the loop is only as trustworthy as the checks it has to pass.

## Making it work well

- **One task per item.** The most common failure is a backlog item too big for one pass.
- **Acceptance criteria in the item.** The agent cannot ask you what you meant.
- **Read `PROGRESS.md` after a run.** `failed` and `blocked` entries are where the real
  signal is — they tell you which items were underspecified.
- **Start small.** Run `-n 3` and read every commit before trusting a longer run.
