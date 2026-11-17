---
title: "Rich Text Editors Patterns That Work for Course Platforms"
created-on: "2021-08-23T08:15:00Z"
updated-on: "2021-09-01T08:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

We rebuilt our approach to rich text editors three times last year. Here is what survived.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
