---
title: "Static Site Builds, Revisited by Personal Blogs"
created-on: "2026-05-07T21:45:00Z"
updated-on: "2026-06-28T21:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

Most teams only notice static site builds once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
