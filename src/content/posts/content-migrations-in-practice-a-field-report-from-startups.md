---
title: "Content Migrations in Practice: A Field Report from Startups"
created-on: "2024-09-19T05:45:00Z"
updated-on: "2024-10-06T05:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to content migrations three times last year. Here is what survived.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
