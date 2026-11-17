---
title: "Taxonomies and the Long Tail of News Publishers"
created-on: "2026-06-14T20:00:00Z"
updated-on: "2026-06-19T20:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about taxonomies. It grew, because every answer raised two more questions.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
