---
title: "Link Checking, Revisited by Content Editors"
created-on: "2023-06-24T17:30:00Z"
updated-on: "2023-08-06T17:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/tooling.json"
---

There is a quiet consensus that link checking is solved. Spend a week with content editors and that consensus falls apart quickly.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
