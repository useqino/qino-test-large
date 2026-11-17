---
title: "Small Wins in Taxonomies for Documentation Sites"
created-on: "2026-06-18T02:30:00Z"
updated-on: "2026-06-23T02:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/tooling.json"
---

We rebuilt our approach to taxonomies three times last year. Here is what survived.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
