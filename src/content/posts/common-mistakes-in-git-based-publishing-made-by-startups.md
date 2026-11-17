---
title: "Common Mistakes in Git-Based Publishing Made by Startups"
created-on: "2021-09-14T06:45:00Z"
updated-on: "2021-09-23T06:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about git-based publishing. It grew, because every answer raised two more questions.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
