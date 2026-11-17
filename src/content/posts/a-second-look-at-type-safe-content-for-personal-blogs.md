---
title: "A Second Look at Type-Safe Content for Personal Blogs"
created-on: "2021-08-31T16:15:00Z"
updated-on: "2021-10-28T16:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

Most teams only notice type-safe content once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
