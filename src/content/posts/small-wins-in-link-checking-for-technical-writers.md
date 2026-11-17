---
title: "Small Wins in Link Checking for Technical Writers"
created-on: "2025-05-18T22:45:00Z"
updated-on: "2025-05-30T22:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

We rebuilt our approach to link checking three times last year. Here is what survived.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
