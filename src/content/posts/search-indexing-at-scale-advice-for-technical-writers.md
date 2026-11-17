---
title: "Search Indexing at Scale: Advice for Technical Writers"
created-on: "2023-01-16T01:15:00Z"
updated-on: "2023-01-29T01:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

We rebuilt our approach to search indexing three times last year. Here is what survived.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
