---
title: "How Internal Wikis Approach Headless CMSes"
created-on: "2022-01-26T15:15:00Z"
updated-on: "2022-02-02T15:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about headless cmses. It grew, because every answer raised two more questions.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
