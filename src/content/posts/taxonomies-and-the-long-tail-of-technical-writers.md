---
title: "Taxonomies and the Long Tail of Technical Writers"
created-on: "2026-02-16T02:30:00Z"
updated-on: "2026-04-15T02:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

taxonomies sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
