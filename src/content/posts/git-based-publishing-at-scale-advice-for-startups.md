---
title: "Git-Based Publishing at Scale: Advice for Startups"
created-on: "2022-08-28T01:45:00Z"
updated-on: "2022-09-14T01:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to git-based publishing three times last year. Here is what survived.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

If you take one thing away, make it this: decide on purpose, and write the decision down.
