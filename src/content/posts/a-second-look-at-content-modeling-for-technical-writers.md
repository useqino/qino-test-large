---
title: "A Second Look at Content Modeling for Technical Writers"
created-on: "2023-05-23T03:00:00Z"
updated-on: "2023-05-31T03:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

Most teams only notice content modeling once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
