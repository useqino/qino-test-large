---
title: "Why Product Teams Should Care About Incremental Builds"
created-on: "2022-03-02T18:45:00Z"
updated-on: "2022-03-06T18:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
