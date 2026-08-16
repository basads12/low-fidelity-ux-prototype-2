# Ralph loop prompt

You are running inside a **Ralph loop**: a fresh, memory-less Claude Code session is
started with this exact prompt over and over. You remember nothing from the previous
iteration. Every piece of continuity lives in files in this repository.

Do **one** unit of work this iteration, verify it, record it, and exit. The loop will
start a new you for the next unit.

## 1. Orient (always do this first)

Read, in this order:

1. `ralph/BACKLOG.md` — the queue of work. Unchecked `- [ ]` items are open.
2. `ralph/PROGRESS.md` — the journal. The last few entries tell you what just happened
   and, importantly, what already failed.
3. `git log --oneline -10` — what actually landed.

## 2. Pick exactly one task

Take the **topmost unchecked `- [ ]` item** in `ralph/BACKLOG.md`. Do not batch. Do not
skip ahead to a more interesting item.

Before you start, check `ralph/PROGRESS.md` for prior attempts at this same item:

- Attempted **once or twice** before and still open → try a *different* approach than
  the one recorded. Repeating a failed approach wastes an iteration.
- Attempted **three or more** times → stop attacking it. Move it to the
  `## Blocked` section of `ralph/BACKLOG.md` with a one-line note on what defeated it,
  append a `blocked` entry to `ralph/PROGRESS.md`, commit that, and exit. A human will
  unblock it.

If there are no unchecked items left anywhere in `ralph/BACKLOG.md`, create the file
`ralph/STOP` containing a one-line reason, append a final entry to `ralph/PROGRESS.md`,
commit, and exit. That halts the loop.

## 3. Do the work

Implement the task properly. Small, focused diff. Match the surrounding code — this
repo is TypeScript + React with Tailwind; follow the conventions already in the files
you touch rather than importing new ones.

Do not add dependencies unless the backlog item explicitly calls for it.

## 4. Verify before you commit

This repo holds two apps. Run the checks that cover what you touched:

- Root Vite/React prototype (`src/`, `index.html`, `vite.config.ts`):
  - `npm run build`
- Next.js app (`kwc-art-visualizer/`):
  - `cd kwc-art-visualizer && npm run lint`
  - `cd kwc-art-visualizer && npm run build`

There is no test suite in this repo. If the backlog item asks for tests, adding them is
part of the task, not a reason to skip verification.

If verification fails and you cannot fix it within this iteration: **do not commit
broken code.** Revert your changes with `git checkout -- .`, append a `failed` entry to
`ralph/PROGRESS.md` explaining precisely what broke, commit only that journal entry, and
exit. The next iteration will read it and try another angle.

## 5. Record and commit

Only after verification passes:

1. Tick the item in `ralph/BACKLOG.md`: `- [ ]` → `- [x]`.
2. Append one entry to `ralph/PROGRESS.md` using the format documented at the top of
   that file. Be specific about what you changed and how you verified it — the next
   iteration has no other way to know.
3. Commit everything together:

   ```
   git add -A
   git commit -m "<short description of the task you completed>"
   ```

Commit locally. **Do not push and do not open a pull request** — a human reviews the
accumulated commits after the loop finishes.

## Rules that hold every iteration

- One task per iteration. Always.
- Never leave the working tree dirty on exit. Either commit it or revert it.
- Never edit `ralph/PROMPT.md` or `ralph.sh`. Those are the loop itself; changing them
  mid-run makes the run unreproducible.
- Never delete or rewrite history in `ralph/PROGRESS.md`. It is append-only. It is the
  only memory you have.
- Never use `git push`, `git reset --hard` on other people's commits, or force-push.
- If `ralph/BACKLOG.md` is missing or malformed, do not guess at work. Write the problem
  to `ralph/PROGRESS.md`, create `ralph/STOP`, commit, and exit.
