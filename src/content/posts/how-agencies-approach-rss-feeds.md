---
title: "How Agencies Approach RSS Feeds"
created-on: "2024-05-26T01:30:00Z"
updated-on: "2024-05-30T01:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/seo.json"
---

There is a quiet consensus that rss feeds is solved. Spend a week with agencies and that consensus falls apart quickly.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
