---
title: "Ten Questions About Content Relations from Enterprises"
created-on: "2026-03-26T13:30:00Z"
updated-on: "2026-04-24T13:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

We rebuilt our approach to content relations three times last year. Here is what survived.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
