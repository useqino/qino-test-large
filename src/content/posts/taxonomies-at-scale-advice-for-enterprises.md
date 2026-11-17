---
title: "Taxonomies at Scale: Advice for Enterprises"
created-on: "2021-05-30T14:30:00Z"
updated-on: "2021-07-01T14:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

If you work with enterprises, you have probably met taxonomies in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
