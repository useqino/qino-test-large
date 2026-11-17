---
title: "Preview Modes and the Long Tail of Large Archives"
created-on: "2024-11-30T13:15:00Z"
updated-on: "2025-01-03T13:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to preview modes three times last year. Here is what survived.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
