---
title: "Common Mistakes in Pagination Made by Small Teams"
created-on: "2021-12-10T20:00:00Z"
updated-on: "2022-02-04T20:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/amara-okonkwo.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about pagination. It grew, because every answer raised two more questions.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
