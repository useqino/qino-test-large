---
title: "A Practical Guide to Git-Based Publishing for Agencies"
created-on: "2025-05-05T18:15:00Z"
updated-on: "2025-06-02T18:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

If you work with agencies, you have probably met git-based publishing in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
