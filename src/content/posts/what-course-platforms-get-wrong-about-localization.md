---
title: "What Course Platforms Get Wrong About Localization"
created-on: "2020-12-08T17:15:00Z"
updated-on: "2020-12-11T17:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about localization. It grew, because every answer raised two more questions.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
