---
title: "Pagination at Scale: Advice for Startups"
created-on: "2023-11-30T06:45:00Z"
updated-on: "2023-12-23T06:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that pagination is solved. Spend a week with startups and that consensus falls apart quickly.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
