---
title: "Rethinking Content Linting for Personal Blogs"
created-on: "2025-05-31T19:45:00Z"
updated-on: "2025-07-17T19:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

There is a quiet consensus that content linting is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
