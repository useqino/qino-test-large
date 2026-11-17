---
title: "Ten Questions About Content Linting from E-commerce Catalogs"
created-on: "2022-08-16T02:30:00Z"
updated-on: "2022-09-05T02:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/lars-eriksson.json"
category: "categories/tooling.json"
---

We rebuilt our approach to content linting three times last year. Here is what survived.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
