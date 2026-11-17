---
title: "Common Mistakes in Build Caching Made by Solo Developers"
created-on: "2020-11-01T15:00:00Z"
updated-on: "2020-12-09T15:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/architecture.json"
---

If you work with solo developers, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
