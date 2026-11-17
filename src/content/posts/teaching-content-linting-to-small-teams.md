---
title: "Teaching Content Linting to Small Teams"
created-on: "2025-07-15T13:00:00Z"
updated-on: "2025-08-02T13:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

If you work with small teams, you have probably met content linting in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
