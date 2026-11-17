---
title: "Notes on Pull Request Reviews for News Publishers"
created-on: "2023-07-26T21:15:00Z"
updated-on: "2023-08-11T21:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to pull request reviews three times last year. Here is what survived.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
