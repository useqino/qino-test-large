---
title: "The Hidden Cost of Schema Validation for Large Archives"
created-on: "2021-08-11T23:00:00Z"
updated-on: "2021-09-01T23:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/content-modeling.json"
---

Most teams only notice schema validation once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
