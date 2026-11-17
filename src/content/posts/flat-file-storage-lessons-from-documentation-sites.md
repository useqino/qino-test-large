---
title: "Flat-File Storage: Lessons from Documentation Sites"
created-on: "2025-03-21T15:45:00Z"
updated-on: "2025-03-31T15:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about flat-file storage. It grew, because every answer raised two more questions.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
