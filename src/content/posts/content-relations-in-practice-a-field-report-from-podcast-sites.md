---
title: "Content Relations in Practice: A Field Report from Podcast Sites"
created-on: "2022-06-09T18:30:00Z"
updated-on: "2022-06-28T18:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

There is a quiet consensus that content relations is solved. Spend a week with podcast sites and that consensus falls apart quickly.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
