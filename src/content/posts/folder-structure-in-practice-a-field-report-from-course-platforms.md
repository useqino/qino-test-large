---
title: "Folder Structure in Practice: A Field Report from Course Platforms"
created-on: "2025-02-21T08:30:00Z"
updated-on: "2025-04-18T08:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to folder structure three times last year. Here is what survived.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
