---
title: "Notes on Search Indexing for Design Systems"
created-on: "2025-06-23T11:45:00Z"
updated-on: "2025-07-14T11:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

We rebuilt our approach to search indexing three times last year. Here is what survived.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
