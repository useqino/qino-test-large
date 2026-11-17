---
title: "Redirect Maps: Lessons from Small Teams"
created-on: "2024-09-02T08:15:00Z"
updated-on: "2024-10-27T08:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about redirect maps. It grew, because every answer raised two more questions.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
