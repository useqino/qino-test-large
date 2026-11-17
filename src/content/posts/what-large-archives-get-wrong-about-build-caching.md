---
title: "What Large Archives Get Wrong About Build Caching"
created-on: "2021-06-05T17:15:00Z"
updated-on: "2021-07-23T17:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

build caching sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```bash
pnpm qino build
pnpm next build
```

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
