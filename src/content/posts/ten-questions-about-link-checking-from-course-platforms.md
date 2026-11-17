---
title: "Ten Questions About Link Checking from Course Platforms"
created-on: "2022-08-21T07:00:00Z"
updated-on: "2022-08-26T07:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

Most teams only notice link checking once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
