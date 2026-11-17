---
title: "Content Relations Patterns That Work for News Publishers"
created-on: "2021-04-30T15:15:00Z"
updated-on: "2021-05-20T15:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

There is a quiet consensus that content relations is solved. Spend a week with news publishers and that consensus falls apart quickly.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

If you take one thing away, make it this: decide on purpose, and write the decision down.
