---
title: "A Practical Guide to Search Indexing for Nonprofits"
created-on: "2025-04-19T07:00:00Z"
updated-on: "2025-05-11T07:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/amara-okonkwo.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about search indexing. It grew, because every answer raised two more questions.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
