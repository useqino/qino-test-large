---
title: "Draft Handling, Revisited by Technical Writers"
created-on: "2025-09-10T16:30:00Z"
updated-on: "2025-10-18T16:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

We rebuilt our approach to draft handling three times last year. Here is what survived.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
