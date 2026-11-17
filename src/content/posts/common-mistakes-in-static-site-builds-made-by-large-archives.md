---
title: "Common Mistakes in Static Site Builds Made by Large Archives"
created-on: "2024-07-02T18:15:00Z"
updated-on: "2024-07-10T18:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

If you work with large archives, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

If you take one thing away, make it this: decide on purpose, and write the decision down.
