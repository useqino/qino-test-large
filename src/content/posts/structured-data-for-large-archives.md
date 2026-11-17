---
title: "Structured Data for Large Archives"
created-on: "2021-02-05T02:30:00Z"
updated-on: "2021-02-13T02:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

We rebuilt our approach to structured data three times last year. Here is what survived.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
