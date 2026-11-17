---
title: "Debugging Taxonomies as Podcast Sites"
created-on: "2023-11-20T08:00:00Z"
updated-on: "2024-01-16T08:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

taxonomies sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
