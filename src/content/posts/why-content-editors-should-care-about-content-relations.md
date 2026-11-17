---
title: "Why Content Editors Should Care About Content Relations"
created-on: "2023-12-04T17:15:00Z"
updated-on: "2023-12-14T17:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

Most teams only notice content relations once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
