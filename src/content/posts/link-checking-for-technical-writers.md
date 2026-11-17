---
title: "Link Checking for Technical Writers"
created-on: "2025-05-19T09:45:00Z"
updated-on: "2025-07-15T09:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

We rebuilt our approach to link checking three times last year. Here is what survived.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
