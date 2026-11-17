---
title: "What Design Systems Get Wrong About Git-Based Publishing"
created-on: "2023-12-03T08:45:00Z"
updated-on: "2024-01-11T08:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/markdown.json"
---

We rebuilt our approach to git-based publishing three times last year. Here is what survived.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
