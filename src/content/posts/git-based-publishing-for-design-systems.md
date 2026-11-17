---
title: "Git-Based Publishing for Design Systems"
created-on: "2021-05-03T08:45:00Z"
updated-on: "2021-05-25T08:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about git-based publishing. It grew, because every answer raised two more questions.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

If you take one thing away, make it this: decide on purpose, and write the decision down.
