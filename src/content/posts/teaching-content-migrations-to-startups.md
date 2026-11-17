---
title: "Teaching Content Migrations to Startups"
created-on: "2024-04-29T17:45:00Z"
updated-on: "2024-06-27T17:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about content migrations. It grew, because every answer raised two more questions.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
