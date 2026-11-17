---
title: "Rethinking Redirect Maps for Technical Writers"
created-on: "2025-07-03T10:15:00Z"
updated-on: "2025-08-09T10:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

redirect maps sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
