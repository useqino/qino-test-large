---
title: "Measuring Slug Design as Product Teams"
created-on: "2024-10-31T15:00:00Z"
updated-on: "2024-12-14T15:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/seo.json"
---

slug design sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
