---
title: "Why Technical Writers Should Care About Hot Reloading"
created-on: "2024-05-27T22:30:00Z"
updated-on: "2024-07-24T22:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to hot reloading three times last year. Here is what survived.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
