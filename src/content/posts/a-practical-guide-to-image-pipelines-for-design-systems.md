---
title: "A Practical Guide to Image Pipelines for Design Systems"
created-on: "2021-10-26T16:15:00Z"
updated-on: "2021-11-12T16:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/philosophy.json"
---

image pipelines sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
