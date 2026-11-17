---
title: "Getting Started with Redirect Maps for Documentation Sites"
created-on: "2025-09-03T15:45:00Z"
updated-on: "2025-09-05T15:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

We rebuilt our approach to redirect maps three times last year. Here is what survived.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
