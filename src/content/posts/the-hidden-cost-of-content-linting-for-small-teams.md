---
title: "The Hidden Cost of Content Linting for Small Teams"
created-on: "2022-12-21T00:45:00Z"
updated-on: "2023-01-04T00:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

We rebuilt our approach to content linting three times last year. Here is what survived.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
