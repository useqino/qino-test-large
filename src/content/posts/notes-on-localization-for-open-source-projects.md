---
title: "Notes on Localization for Open Source Projects"
created-on: "2022-05-05T10:30:00Z"
updated-on: "2022-05-07T10:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/camille-laurent.json"
category: "categories/editorial.json"
---

There is a quiet consensus that localization is solved. Spend a week with open source projects and that consensus falls apart quickly.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
