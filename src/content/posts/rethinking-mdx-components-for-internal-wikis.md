---
title: "Rethinking MDX Components for Internal Wikis"
created-on: "2021-07-18T02:45:00Z"
updated-on: "2021-08-20T02:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that mdx components is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
