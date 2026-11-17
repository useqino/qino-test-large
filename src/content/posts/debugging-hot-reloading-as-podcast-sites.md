---
title: "Debugging Hot Reloading as Podcast Sites"
created-on: "2026-08-23T00:00:00Z"
updated-on: "2026-10-18T00:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to hot reloading three times last year. Here is what survived.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
