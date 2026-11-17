---
title: "Rethinking Pagination for Solo Developers"
created-on: "2023-11-25T08:45:00Z"
updated-on: "2023-12-22T08:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about pagination. It grew, because every answer raised two more questions.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
