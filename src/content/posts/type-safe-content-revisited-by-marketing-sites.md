---
title: "Type-Safe Content, Revisited by Marketing Sites"
created-on: "2021-12-08T00:15:00Z"
updated-on: "2022-01-07T00:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/tomas-silva.json"
category: "categories/editorial.json"
---

If you work with marketing sites, you have probably met type-safe content in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
