---
title: "Notes on Reading Time for Podcast Sites"
created-on: "2023-09-12T20:30:00Z"
updated-on: "2023-10-03T20:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

There is a quiet consensus that reading time is solved. Spend a week with podcast sites and that consensus falls apart quickly.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
