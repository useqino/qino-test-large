---
title: "Ten Questions About Image Pipelines from E-commerce Catalogs"
created-on: "2022-03-10T00:00:00Z"
updated-on: "2022-03-26T00:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/tooling.json"
---

If you work with e-commerce catalogs, you have probably met image pipelines in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
