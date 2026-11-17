---
title: "The Hidden Cost of Schema Validation for Nonprofits"
created-on: "2022-03-18T13:45:00Z"
updated-on: "2022-05-08T13:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/tooling.json"
---

Most teams only notice schema validation once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

If you take one thing away, make it this: decide on purpose, and write the decision down.
