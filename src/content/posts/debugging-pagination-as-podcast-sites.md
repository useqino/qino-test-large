---
title: "Debugging Pagination as Podcast Sites"
created-on: "2026-03-03T12:00:00Z"
updated-on: "2026-04-30T12:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

We rebuilt our approach to pagination three times last year. Here is what survived.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
