---
title: "Redirect Maps Patterns That Work for Startups"
created-on: "2022-10-08T09:45:00Z"
updated-on: "2022-10-25T09:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

We rebuilt our approach to redirect maps three times last year. Here is what survived.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
