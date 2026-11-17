---
title: "Small Wins in Incremental Builds for Internal Wikis"
created-on: "2021-09-15T16:45:00Z"
updated-on: "2021-10-25T16:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
