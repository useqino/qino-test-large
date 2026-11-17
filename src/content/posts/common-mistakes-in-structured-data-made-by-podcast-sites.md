---
title: "Common Mistakes in Structured Data Made by Podcast Sites"
created-on: "2021-11-11T11:45:00Z"
updated-on: "2022-01-06T11:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/seo.json"
---

Most teams only notice structured data once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
