---
title: "Measuring Hot Reloading as Course Platforms"
created-on: "2026-05-31T09:30:00Z"
updated-on: "2026-06-02T09:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

If you work with course platforms, you have probably met hot reloading in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
