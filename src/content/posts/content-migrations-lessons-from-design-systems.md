---
title: "Content Migrations: Lessons from Design Systems"
created-on: "2023-09-13T01:30:00Z"
updated-on: "2023-10-03T01:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

We rebuilt our approach to content migrations three times last year. Here is what survived.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
