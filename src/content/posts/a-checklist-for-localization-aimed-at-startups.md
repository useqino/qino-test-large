---
title: "A Checklist for Localization Aimed at Startups"
created-on: "2021-01-06T11:30:00Z"
updated-on: "2021-02-20T11:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to localization three times last year. Here is what survived.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
