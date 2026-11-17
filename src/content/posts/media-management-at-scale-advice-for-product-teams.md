---
title: "Media Management at Scale: Advice for Product Teams"
created-on: "2024-09-13T21:45:00Z"
updated-on: "2024-11-11T21:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

We rebuilt our approach to media management three times last year. Here is what survived.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

If you take one thing away, make it this: decide on purpose, and write the decision down.
