---
title: "A Checklist for Content Linting Aimed at Open Source Projects"
created-on: "2024-12-29T10:00:00Z"
updated-on: "2025-02-15T10:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

content linting sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
