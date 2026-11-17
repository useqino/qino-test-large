---
title: "Small Wins in Git-Based Publishing for Large Archives"
created-on: "2023-11-07T17:30:00Z"
updated-on: "2024-01-03T17:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

There is a quiet consensus that git-based publishing is solved. Spend a week with large archives and that consensus falls apart quickly.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
