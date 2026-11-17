---
title: "Localization, Revisited by Startups"
created-on: "2023-10-17T07:15:00Z"
updated-on: "2023-12-09T07:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about localization. It grew, because every answer raised two more questions.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
