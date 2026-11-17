---
title: "Taxonomies Patterns That Work for Course Platforms"
created-on: "2024-07-17T17:30:00Z"
updated-on: "2024-08-09T17:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about taxonomies. It grew, because every answer raised two more questions.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
