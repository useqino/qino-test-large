---
title: "The Case for Redirect Maps Among Personal Blogs"
created-on: "2020-12-20T09:45:00Z"
updated-on: "2021-01-07T09:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/seo.json"
---

We rebuilt our approach to redirect maps three times last year. Here is what survived.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
