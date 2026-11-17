---
title: "What Course Platforms Get Wrong About Incremental Builds"
created-on: "2022-06-19T19:00:00Z"
updated-on: "2022-07-04T19:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about incremental builds. It grew, because every answer raised two more questions.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
