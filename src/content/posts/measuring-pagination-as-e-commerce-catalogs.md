---
title: "Measuring Pagination as E-commerce Catalogs"
created-on: "2024-07-04T09:30:00Z"
updated-on: "2024-07-15T09:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/philosophy.json"
---

If you work with e-commerce catalogs, you have probably met pagination in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
