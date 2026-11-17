---
title: "Notes on Localization for Design Systems"
created-on: "2022-09-29T02:30:00Z"
updated-on: "2022-10-20T02:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to localization three times last year. Here is what survived.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
