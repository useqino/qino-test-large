---
title: "Debugging Editorial Workflows as Documentation Sites"
created-on: "2020-12-07T13:30:00Z"
updated-on: "2020-12-07T13:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/camille-laurent.json"
category: "categories/seo.json"
---

If you work with documentation sites, you have probably met editorial workflows in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
