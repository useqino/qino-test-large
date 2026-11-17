---
title: "Small Wins in Content Relations for Solo Developers"
created-on: "2021-12-26T09:15:00Z"
updated-on: "2022-02-15T09:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/editorial.json"
---

content relations sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
