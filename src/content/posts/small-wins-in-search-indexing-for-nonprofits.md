---
title: "Small Wins in Search Indexing for Nonprofits"
created-on: "2026-05-10T13:15:00Z"
updated-on: "2026-05-15T13:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about search indexing. It grew, because every answer raised two more questions.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
