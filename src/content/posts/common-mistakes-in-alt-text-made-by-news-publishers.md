---
title: "Common Mistakes in Alt Text Made by News Publishers"
created-on: "2021-01-10T11:45:00Z"
updated-on: "2021-01-29T11:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that alt text is solved. Spend a week with news publishers and that consensus falls apart quickly.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
