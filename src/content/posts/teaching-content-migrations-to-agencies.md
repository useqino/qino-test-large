---
title: "Teaching Content Migrations to Agencies"
created-on: "2024-06-04T02:30:00Z"
updated-on: "2024-07-26T02:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/diego-moreno.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that content migrations is solved. Spend a week with agencies and that consensus falls apart quickly.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
