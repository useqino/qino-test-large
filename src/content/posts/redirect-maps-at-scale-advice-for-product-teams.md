---
title: "Redirect Maps at Scale: Advice for Product Teams"
created-on: "2022-08-07T22:15:00Z"
updated-on: "2022-09-16T22:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about redirect maps. It grew, because every answer raised two more questions.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
