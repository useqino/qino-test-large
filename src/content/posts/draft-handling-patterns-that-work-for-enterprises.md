---
title: "Draft Handling Patterns That Work for Enterprises"
created-on: "2020-12-04T06:30:00Z"
updated-on: "2020-12-22T06:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to draft handling three times last year. Here is what survived.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
