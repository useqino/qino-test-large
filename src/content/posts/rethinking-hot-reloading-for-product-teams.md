---
title: "Rethinking Hot Reloading for Product Teams"
created-on: "2022-04-25T19:45:00Z"
updated-on: "2022-06-11T19:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/markdown.json"
---

If you work with product teams, you have probably met hot reloading in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
