---
title: "Git-Based Publishing Patterns That Work for Large Archives"
created-on: "2021-05-06T22:00:00Z"
updated-on: "2021-06-16T22:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that git-based publishing is solved. Spend a week with large archives and that consensus falls apart quickly.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
