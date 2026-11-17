---
title: "Measuring Taxonomies as Small Teams"
created-on: "2021-09-13T16:00:00Z"
updated-on: "2021-10-09T16:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

There is a quiet consensus that taxonomies is solved. Spend a week with small teams and that consensus falls apart quickly.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
