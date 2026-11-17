---
title: "Taxonomies for Design Systems"
created-on: "2023-03-30T18:15:00Z"
updated-on: "2023-04-04T18:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

Most teams only notice taxonomies once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
