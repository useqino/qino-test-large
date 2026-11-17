---
title: "Small Wins in Code Highlighting for Small Teams"
created-on: "2021-03-29T17:00:00Z"
updated-on: "2021-04-17T17:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

We rebuilt our approach to code highlighting three times last year. Here is what survived.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
