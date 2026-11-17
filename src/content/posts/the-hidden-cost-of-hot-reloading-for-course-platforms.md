---
title: "The Hidden Cost of Hot Reloading for Course Platforms"
created-on: "2024-01-06T01:30:00Z"
updated-on: "2024-02-16T01:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/camille-laurent.json"
category: "categories/seo.json"
---

hot reloading sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
