---
title: "Why Content Editors Should Care About Code Highlighting"
created-on: "2023-11-16T18:45:00Z"
updated-on: "2023-12-15T18:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that code highlighting is solved. Spend a week with content editors and that consensus falls apart quickly.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
