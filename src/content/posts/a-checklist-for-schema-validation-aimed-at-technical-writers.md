---
title: "A Checklist for Schema Validation Aimed at Technical Writers"
created-on: "2021-12-31T14:15:00Z"
updated-on: "2022-02-23T14:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to schema validation three times last year. Here is what survived.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
