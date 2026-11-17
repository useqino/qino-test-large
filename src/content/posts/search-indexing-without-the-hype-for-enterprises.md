---
title: "Search Indexing Without the Hype, for Enterprises"
created-on: "2022-12-23T00:00:00Z"
updated-on: "2023-02-16T00:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with enterprises and that consensus falls apart quickly.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
