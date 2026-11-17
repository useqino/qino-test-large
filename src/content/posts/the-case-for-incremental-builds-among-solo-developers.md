---
title: "The Case for Incremental Builds Among Solo Developers"
created-on: "2022-01-04T17:00:00Z"
updated-on: "2022-01-23T17:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about incremental builds. It grew, because every answer raised two more questions.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
