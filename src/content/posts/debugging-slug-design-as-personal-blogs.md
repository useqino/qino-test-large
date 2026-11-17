---
title: "Debugging Slug Design as Personal Blogs"
created-on: "2026-02-01T17:30:00Z"
updated-on: "2026-04-01T17:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that slug design is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
