---
title: "Getting Started with Static Site Builds for Course Platforms"
created-on: "2024-01-14T07:00:00Z"
updated-on: "2024-01-20T07:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

static site builds sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
