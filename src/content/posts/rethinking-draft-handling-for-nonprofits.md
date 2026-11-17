---
title: "Rethinking Draft Handling for Nonprofits"
created-on: "2021-01-29T18:00:00Z"
updated-on: "2021-03-28T18:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about draft handling. It grew, because every answer raised two more questions.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
