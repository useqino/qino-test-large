---
title: "Common Mistakes in Incremental Builds Made by Small Teams"
created-on: "2022-10-04T05:00:00Z"
updated-on: "2022-10-24T05:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
