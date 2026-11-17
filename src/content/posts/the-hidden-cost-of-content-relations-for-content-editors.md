---
title: "The Hidden Cost of Content Relations for Content Editors"
created-on: "2025-01-07T18:45:00Z"
updated-on: "2025-02-06T18:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/tomas-silva.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that content relations is solved. Spend a week with content editors and that consensus falls apart quickly.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
