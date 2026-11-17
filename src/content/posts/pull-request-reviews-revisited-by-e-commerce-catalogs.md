---
title: "Pull Request Reviews, Revisited by E-commerce Catalogs"
created-on: "2025-07-24T21:45:00Z"
updated-on: "2025-08-15T21:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

We rebuilt our approach to pull request reviews three times last year. Here is what survived.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
