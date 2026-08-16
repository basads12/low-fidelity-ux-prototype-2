# Ralph progress journal

Append-only. This is the loop's entire memory — each iteration starts with no context
except what is written here. Never edit or delete existing entries.

## Entry format

```
### <iteration label> — <status: done | failed | blocked | halted>
**Task:** <the backlog item, verbatim>
**Did:** <what actually changed — files, approach>
**Verified:** <exact commands run and their result>
**Notes:** <anything the next iteration needs: dead ends, surprises, follow-ups>
```

Status meanings:

- `done` — task completed, verification passed, committed.
- `failed` — attempt reverted. Say precisely what broke so the next iteration tries a
  different approach instead of repeating this one.
- `blocked` — third failed attempt; item moved to `## Blocked` in the backlog for a human.
- `halted` — backlog empty or malformed; `ralph/STOP` created and the loop ended.

---

<!-- Entries begin below. Newest at the bottom. -->
