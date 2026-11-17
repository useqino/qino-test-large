---
title: "A Checklist for Git-Based Publishing Aimed at Documentation Sites"
created-on: "2022-06-27T06:00:00Z"
updated-on: "2022-07-07T06:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about git-based publishing. It grew, because every answer raised two more questions.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
