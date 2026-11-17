---
title: "A Checklist for Content Migrations Aimed at E-commerce Catalogs"
created-on: "2026-01-11T11:00:00Z"
updated-on: "2026-02-24T11:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to content migrations three times last year. Here is what survived.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
