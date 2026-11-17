---
title: "Debugging Git-Based Publishing as Small Teams"
created-on: "2022-06-15T04:30:00Z"
updated-on: "2022-08-12T04:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

Most teams only notice git-based publishing once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
