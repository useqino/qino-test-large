---
title: "Slug Design, Revisited by Open Source Projects"
created-on: "2022-05-09T09:15:00Z"
updated-on: "2022-05-16T09:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about slug design. It grew, because every answer raised two more questions.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
