---
title: "The Hidden Cost of Slug Design for Product Teams"
created-on: "2021-12-05T10:30:00Z"
updated-on: "2022-01-15T10:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

slug design sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
