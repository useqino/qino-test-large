---
title: "Measuring Build Caching as Design Systems"
created-on: "2023-05-18T02:00:00Z"
updated-on: "2023-07-16T02:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

If you work with design systems, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
