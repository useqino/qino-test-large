---
title: "The Case for Editorial Workflows Among Open Source Projects"
created-on: "2021-02-17T01:45:00Z"
updated-on: "2021-03-21T01:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/seo.json"
---

We rebuilt our approach to editorial workflows three times last year. Here is what survived.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
