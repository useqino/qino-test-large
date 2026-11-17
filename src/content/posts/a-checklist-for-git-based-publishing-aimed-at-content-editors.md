---
title: "A Checklist for Git-Based Publishing Aimed at Content Editors"
created-on: "2021-09-19T11:15:00Z"
updated-on: "2021-10-08T11:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

git-based publishing sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
