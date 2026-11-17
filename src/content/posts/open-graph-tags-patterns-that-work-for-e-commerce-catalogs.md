---
title: "Open Graph Tags Patterns That Work for E-commerce Catalogs"
created-on: "2025-11-22T09:15:00Z"
updated-on: "2025-12-12T09:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

Most teams only notice open graph tags once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
