---
title: "Common Mistakes in Pull Request Reviews Made by Solo Developers"
created-on: "2022-04-09T07:45:00Z"
updated-on: "2022-06-01T07:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

We rebuilt our approach to pull request reviews three times last year. Here is what survived.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
