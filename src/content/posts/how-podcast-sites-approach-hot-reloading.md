---
title: "How Podcast Sites Approach Hot Reloading"
created-on: "2023-01-26T12:30:00Z"
updated-on: "2023-02-09T12:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about hot reloading. It grew, because every answer raised two more questions.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
