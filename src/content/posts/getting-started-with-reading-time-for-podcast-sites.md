---
title: "Getting Started with Reading Time for Podcast Sites"
created-on: "2023-08-09T07:30:00Z"
updated-on: "2023-08-27T07:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

Most teams only notice reading time once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
