---
title: "Code Highlighting Patterns That Work for Startups"
created-on: "2021-07-14T21:30:00Z"
updated-on: "2021-07-31T21:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

Most teams only notice code highlighting once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
