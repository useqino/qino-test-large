---
title: "Content Versioning: Lessons from Marketing Sites"
created-on: "2023-12-19T16:00:00Z"
updated-on: "2024-02-04T16:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about content versioning. It grew, because every answer raised two more questions.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
