---
title: "Debugging Preview Modes as News Publishers"
created-on: "2025-10-11T15:15:00Z"
updated-on: "2025-10-19T15:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to preview modes three times last year. Here is what survived.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
