---
title: "Measuring Sitemaps as Nonprofits"
created-on: "2022-05-26T23:15:00Z"
updated-on: "2022-06-27T23:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about sitemaps. It grew, because every answer raised two more questions.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
