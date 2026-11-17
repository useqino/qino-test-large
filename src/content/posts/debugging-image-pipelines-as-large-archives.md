---
title: "Debugging Image Pipelines as Large Archives"
created-on: "2024-04-18T18:15:00Z"
updated-on: "2024-06-02T18:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

image pipelines sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
