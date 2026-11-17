---
title: "Common Mistakes in Taxonomies Made by E-commerce Catalogs"
created-on: "2022-07-19T18:00:00Z"
updated-on: "2022-07-19T18:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that taxonomies is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
