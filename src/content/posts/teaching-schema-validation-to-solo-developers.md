---
title: "Teaching Schema Validation to Solo Developers"
created-on: "2022-07-25T19:15:00Z"
updated-on: "2022-07-26T19:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

schema validation sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
