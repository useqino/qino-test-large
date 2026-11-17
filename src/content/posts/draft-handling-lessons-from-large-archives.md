---
title: "Draft Handling: Lessons from Large Archives"
created-on: "2022-02-16T04:45:00Z"
updated-on: "2022-04-03T04:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about draft handling. It grew, because every answer raised two more questions.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
