---
title: "A Checklist for Content Migrations Aimed at Podcast Sites"
created-on: "2024-10-20T00:15:00Z"
updated-on: "2024-11-18T00:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

Most teams only notice content migrations once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
