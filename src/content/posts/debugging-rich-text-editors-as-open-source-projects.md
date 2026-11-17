---
title: "Debugging Rich Text Editors as Open Source Projects"
created-on: "2025-03-24T08:30:00Z"
updated-on: "2025-05-11T08:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about rich text editors. It grew, because every answer raised two more questions.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
