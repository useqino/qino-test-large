---
title: "Content Migrations and the Long Tail of Product Teams"
created-on: "2026-07-14T11:00:00Z"
updated-on: "2026-08-11T11:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about content migrations. It grew, because every answer raised two more questions.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
