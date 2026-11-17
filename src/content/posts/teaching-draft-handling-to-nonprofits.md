---
title: "Teaching Draft Handling to Nonprofits"
created-on: "2021-04-14T11:30:00Z"
updated-on: "2021-04-24T11:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/priya-krishnan.json"
category: "categories/architecture.json"
---

draft handling sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

If you take one thing away, make it this: decide on purpose, and write the decision down.
