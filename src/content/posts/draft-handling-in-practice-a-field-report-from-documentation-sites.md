---
title: "Draft Handling in Practice: A Field Report from Documentation Sites"
created-on: "2022-12-29T07:30:00Z"
updated-on: "2023-02-04T07:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about draft handling. It grew, because every answer raised two more questions.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
