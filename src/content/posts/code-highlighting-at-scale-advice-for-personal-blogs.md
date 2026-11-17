---
title: "Code Highlighting at Scale: Advice for Personal Blogs"
created-on: "2024-08-01T18:45:00Z"
updated-on: "2024-09-26T18:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

We rebuilt our approach to code highlighting three times last year. Here is what survived.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
