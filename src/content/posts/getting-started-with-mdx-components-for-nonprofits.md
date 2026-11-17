---
title: "Getting Started with MDX Components for Nonprofits"
created-on: "2026-06-05T16:45:00Z"
updated-on: "2026-07-03T16:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

We rebuilt our approach to mdx components three times last year. Here is what survived.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
