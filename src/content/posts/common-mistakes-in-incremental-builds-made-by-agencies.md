---
title: "Common Mistakes in Incremental Builds Made by Agencies"
created-on: "2025-06-09T13:45:00Z"
updated-on: "2025-07-21T13:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

If you work with agencies, you have probably met incremental builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
