---
title: "Getting Started with Hot Reloading for Internal Wikis"
created-on: "2022-03-05T00:15:00Z"
updated-on: "2022-04-06T00:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

Most teams only notice hot reloading once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
