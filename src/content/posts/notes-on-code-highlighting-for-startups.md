---
title: "Notes on Code Highlighting for Startups"
created-on: "2021-06-06T20:45:00Z"
updated-on: "2021-06-30T20:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

There is a quiet consensus that code highlighting is solved. Spend a week with startups and that consensus falls apart quickly.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
