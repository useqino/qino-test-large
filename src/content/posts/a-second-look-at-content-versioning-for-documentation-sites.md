---
title: "A Second Look at Content Versioning for Documentation Sites"
created-on: "2025-07-17T00:15:00Z"
updated-on: "2025-08-07T00:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that content versioning is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
