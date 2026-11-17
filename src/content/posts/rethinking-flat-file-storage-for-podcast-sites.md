---
title: "Rethinking Flat-File Storage for Podcast Sites"
created-on: "2021-09-16T07:00:00Z"
updated-on: "2021-10-27T07:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

Most teams only notice flat-file storage once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
