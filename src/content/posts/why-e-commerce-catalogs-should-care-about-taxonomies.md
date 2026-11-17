---
title: "Why E-commerce Catalogs Should Care About Taxonomies"
created-on: "2024-11-30T14:15:00Z"
updated-on: "2025-01-19T14:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

Most teams only notice taxonomies once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
