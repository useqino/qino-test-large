---
title: "Common Mistakes in Draft Handling Made by Documentation Sites"
created-on: "2022-08-24T06:45:00Z"
updated-on: "2022-09-07T06:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to draft handling three times last year. Here is what survived.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
