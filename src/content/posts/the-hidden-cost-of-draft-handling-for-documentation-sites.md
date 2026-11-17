---
title: "The Hidden Cost of Draft Handling for Documentation Sites"
created-on: "2025-12-25T18:30:00Z"
updated-on: "2026-01-29T18:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

We rebuilt our approach to draft handling three times last year. Here is what survived.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
