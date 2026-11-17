---
title: "Getting Started with Incremental Builds for Product Teams"
created-on: "2021-11-09T16:00:00Z"
updated-on: "2022-01-02T16:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/tooling.json"
---

If you work with product teams, you have probably met incremental builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
