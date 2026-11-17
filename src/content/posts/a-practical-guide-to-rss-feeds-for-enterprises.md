---
title: "A Practical Guide to RSS Feeds for Enterprises"
created-on: "2024-03-29T01:30:00Z"
updated-on: "2024-05-23T01:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about rss feeds. It grew, because every answer raised two more questions.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
