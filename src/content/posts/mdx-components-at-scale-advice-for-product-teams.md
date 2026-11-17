---
title: "MDX Components at Scale: Advice for Product Teams"
created-on: "2022-06-27T23:15:00Z"
updated-on: "2022-08-04T23:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

Most teams only notice mdx components once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
