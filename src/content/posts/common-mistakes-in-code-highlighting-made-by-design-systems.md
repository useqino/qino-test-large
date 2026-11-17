---
title: "Common Mistakes in Code Highlighting Made by Design Systems"
created-on: "2023-12-03T20:45:00Z"
updated-on: "2023-12-06T20:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that code highlighting is solved. Spend a week with design systems and that consensus falls apart quickly.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

If you take one thing away, make it this: decide on purpose, and write the decision down.
