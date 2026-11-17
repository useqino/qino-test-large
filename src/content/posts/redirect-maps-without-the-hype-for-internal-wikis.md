---
title: "Redirect Maps Without the Hype, for Internal Wikis"
created-on: "2026-05-08T04:45:00Z"
updated-on: "2026-06-03T04:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

Most teams only notice redirect maps once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
