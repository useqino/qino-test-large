---
title: "A Practical Guide to Incremental Builds for Design Systems"
created-on: "2021-05-02T05:45:00Z"
updated-on: "2021-05-11T05:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
