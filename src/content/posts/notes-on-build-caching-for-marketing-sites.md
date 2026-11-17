---
title: "Notes on Build Caching for Marketing Sites"
created-on: "2025-10-16T14:15:00Z"
updated-on: "2025-12-11T14:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to build caching three times last year. Here is what survived.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
