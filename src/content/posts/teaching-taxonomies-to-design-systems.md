---
title: "Teaching Taxonomies to Design Systems"
created-on: "2024-01-24T22:45:00Z"
updated-on: "2024-02-11T22:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

There is a quiet consensus that taxonomies is solved. Spend a week with design systems and that consensus falls apart quickly.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
