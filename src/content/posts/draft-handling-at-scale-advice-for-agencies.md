---
title: "Draft Handling at Scale: Advice for Agencies"
created-on: "2025-02-10T04:30:00Z"
updated-on: "2025-03-31T04:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

draft handling sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

If you take one thing away, make it this: decide on purpose, and write the decision down.
