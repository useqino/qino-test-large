---
title: "Teaching Link Checking to Design Systems"
created-on: "2022-07-24T22:30:00Z"
updated-on: "2022-07-28T22:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to link checking three times last year. Here is what survived.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
