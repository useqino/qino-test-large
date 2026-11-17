---
title: "Rethinking Headless CMSes for Technical Writers"
created-on: "2021-02-23T14:30:00Z"
updated-on: "2021-03-03T14:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

If you work with technical writers, you have probably met headless cmses in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```bash
pnpm qino build
pnpm next build
```

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
