---
title: "What Small Teams Get Wrong About Hot Reloading"
created-on: "2025-03-01T22:00:00Z"
updated-on: "2025-04-16T22:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about hot reloading. It grew, because every answer raised two more questions.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
