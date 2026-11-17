---
title: "Measuring Content Linting as Technical Writers"
created-on: "2024-11-01T17:00:00Z"
updated-on: "2024-12-02T17:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to content linting three times last year. Here is what survived.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
