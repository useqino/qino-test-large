---
title: "How Solo Developers Approach Incremental Builds"
created-on: "2022-10-04T11:45:00Z"
updated-on: "2022-11-11T11:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/amara-okonkwo.json"
category: "categories/philosophy.json"
---

If you work with solo developers, you have probably met incremental builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
