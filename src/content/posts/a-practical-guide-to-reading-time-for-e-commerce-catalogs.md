---
title: "A Practical Guide to Reading Time for E-commerce Catalogs"
created-on: "2025-06-04T03:15:00Z"
updated-on: "2025-07-05T03:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

If you work with e-commerce catalogs, you have probably met reading time in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
