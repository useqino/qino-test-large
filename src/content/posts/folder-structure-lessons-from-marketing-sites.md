---
title: "Folder Structure: Lessons from Marketing Sites"
created-on: "2023-03-18T17:30:00Z"
updated-on: "2023-04-30T17:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

If you work with marketing sites, you have probably met folder structure in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
