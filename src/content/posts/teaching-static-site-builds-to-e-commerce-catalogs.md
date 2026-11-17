---
title: "Teaching Static Site Builds to E-commerce Catalogs"
created-on: "2025-07-21T17:45:00Z"
updated-on: "2025-09-03T17:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to static site builds three times last year. Here is what survived.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
