---
title: "Notes on Sitemaps for Small Teams"
created-on: "2024-01-17T19:15:00Z"
updated-on: "2024-02-15T19:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/amara-okonkwo.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about sitemaps. It grew, because every answer raised two more questions.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
