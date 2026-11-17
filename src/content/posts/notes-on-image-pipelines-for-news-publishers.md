---
title: "Notes on Image Pipelines for News Publishers"
created-on: "2021-05-21T20:30:00Z"
updated-on: "2021-07-07T20:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

There is a quiet consensus that image pipelines is solved. Spend a week with news publishers and that consensus falls apart quickly.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
