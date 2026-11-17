---
title: "How Design Systems Approach Structured Data"
created-on: "2023-06-11T15:45:00Z"
updated-on: "2023-06-29T15:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/seo.json"
---

structured data sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
