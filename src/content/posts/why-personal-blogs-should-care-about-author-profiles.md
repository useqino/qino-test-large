---
title: "Why Personal Blogs Should Care About Author Profiles"
created-on: "2024-01-02T11:30:00Z"
updated-on: "2024-02-20T11:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

We rebuilt our approach to author profiles three times last year. Here is what survived.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
