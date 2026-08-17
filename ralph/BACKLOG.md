# Ralph backlog

The work queue for the Ralph loop. The loop takes the **topmost unchecked item** each
iteration, so order is priority.

## How to write a good item

Each item must be completable by a fresh agent in a single iteration, with no memory of
this conversation. That means it needs to state its own acceptance criteria.

Bad:  `- [ ] Improve the configurator`
Good: `- [ ] ConfiguratorWizard: disable "Next" until a format is selected. Acceptance: clicking Next with no format does nothing and the button renders in the disabled state.`

If an item feels like it needs more than one iteration, split it before starting the loop.

## Todo

<!--
  Add items below. The loop stops when there are no unchecked items left here.
  Delete the placeholder before running.
-->

- [ ] Placeholder — replace this with a real task before starting the loop.

## Blocked

<!--
  The loop moves items here after three failed attempts, with a note on what defeated
  them. A human unblocks them by rewriting the item and moving it back to Todo.
-->

## Done

<!--
  Completed items stay ticked in Todo; move them here manually when the list gets long.
-->
