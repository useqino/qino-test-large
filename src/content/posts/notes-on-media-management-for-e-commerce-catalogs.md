---
title: "Notes on Media Management for E-commerce Catalogs"
created-on: "2023-12-18T12:45:00Z"
updated-on: "2023-12-20T12:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

media management sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
