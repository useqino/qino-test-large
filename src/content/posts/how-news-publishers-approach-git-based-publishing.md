---
title: "How News Publishers Approach Git-Based Publishing"
created-on: "2021-06-25T19:30:00Z"
updated-on: "2021-07-20T19:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

Most teams only notice git-based publishing once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
