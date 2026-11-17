---
title: "Getting Started with Incremental Builds for Documentation Sites"
created-on: "2024-09-03T06:15:00Z"
updated-on: "2024-09-18T06:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

incremental builds sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
