---
title: "Measuring Reading Time as Product Teams"
created-on: "2022-04-27T03:45:00Z"
updated-on: "2022-04-28T03:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to reading time three times last year. Here is what survived.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
