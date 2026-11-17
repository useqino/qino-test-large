---
title: "Preview Modes: Lessons from Startups"
created-on: "2026-03-03T14:30:00Z"
updated-on: "2026-04-06T14:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that preview modes is solved. Spend a week with startups and that consensus falls apart quickly.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
