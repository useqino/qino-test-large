---
title: "How E-commerce Catalogs Approach Pagination"
created-on: "2023-06-01T21:00:00Z"
updated-on: "2023-06-17T21:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/priya-krishnan.json"
category: "categories/architecture.json"
---

If you work with e-commerce catalogs, you have probably met pagination in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
