---
title: "Teaching Hot Reloading to News Publishers"
created-on: "2024-10-03T22:15:00Z"
updated-on: "2024-11-19T22:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about hot reloading. It grew, because every answer raised two more questions.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
