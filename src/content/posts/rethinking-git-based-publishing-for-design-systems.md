---
title: "Rethinking Git-Based Publishing for Design Systems"
created-on: "2024-11-29T14:00:00Z"
updated-on: "2025-01-06T14:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

git-based publishing sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
