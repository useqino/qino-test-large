---
title: "Incremental Builds at Scale: Advice for Solo Developers"
created-on: "2023-04-21T08:15:00Z"
updated-on: "2023-05-06T08:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/mei-tanaka.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
