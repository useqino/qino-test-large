---
title: "How Solo Developers Approach Sitemaps"
created-on: "2025-07-01T16:15:00Z"
updated-on: "2025-08-20T16:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to sitemaps three times last year. Here is what survived.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
