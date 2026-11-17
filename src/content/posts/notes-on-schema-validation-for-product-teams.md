---
title: "Notes on Schema Validation for Product Teams"
created-on: "2024-10-14T17:00:00Z"
updated-on: "2024-12-02T17:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about schema validation. It grew, because every answer raised two more questions.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
