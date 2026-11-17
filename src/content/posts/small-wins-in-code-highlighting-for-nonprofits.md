---
title: "Small Wins in Code Highlighting for Nonprofits"
created-on: "2025-10-06T02:45:00Z"
updated-on: "2025-11-27T02:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/priya-krishnan.json"
category: "categories/architecture.json"
---

We rebuilt our approach to code highlighting three times last year. Here is what survived.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
