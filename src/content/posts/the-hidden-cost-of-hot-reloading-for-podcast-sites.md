---
title: "The Hidden Cost of Hot Reloading for Podcast Sites"
created-on: "2021-02-27T11:00:00Z"
updated-on: "2021-04-09T11:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

Most teams only notice hot reloading once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
