---
title: "The Case for Git-Based Publishing Among Documentation Sites"
created-on: "2025-01-16T20:30:00Z"
updated-on: "2025-03-11T20:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/architecture.json"
---

git-based publishing sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
