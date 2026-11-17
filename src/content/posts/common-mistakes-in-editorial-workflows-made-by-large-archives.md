---
title: "Common Mistakes in Editorial Workflows Made by Large Archives"
created-on: "2022-08-29T09:30:00Z"
updated-on: "2022-10-07T09:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

We rebuilt our approach to editorial workflows three times last year. Here is what survived.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
