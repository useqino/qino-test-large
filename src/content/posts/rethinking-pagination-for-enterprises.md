---
title: "Rethinking Pagination for Enterprises"
created-on: "2023-09-18T02:15:00Z"
updated-on: "2023-11-12T02:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

pagination sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
