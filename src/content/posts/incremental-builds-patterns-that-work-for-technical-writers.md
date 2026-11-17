---
title: "Incremental Builds Patterns That Work for Technical Writers"
created-on: "2020-12-08T01:15:00Z"
updated-on: "2021-02-05T01:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/lars-eriksson.json"
category: "categories/tooling.json"
---

incremental builds sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
