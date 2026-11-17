---
title: "Search Indexing and the Long Tail of Personal Blogs"
created-on: "2024-02-13T10:30:00Z"
updated-on: "2024-04-12T10:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about search indexing. It grew, because every answer raised two more questions.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
