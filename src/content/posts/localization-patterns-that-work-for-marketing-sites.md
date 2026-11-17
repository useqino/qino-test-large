---
title: "Localization Patterns That Work for Marketing Sites"
created-on: "2023-05-14T20:00:00Z"
updated-on: "2023-05-23T20:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/mei-tanaka.json"
category: "categories/editorial.json"
---

There is a quiet consensus that localization is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
