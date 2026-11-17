---
title: "Small Wins in Reading Time for E-commerce Catalogs"
created-on: "2021-02-14T18:30:00Z"
updated-on: "2021-03-09T18:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that reading time is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
