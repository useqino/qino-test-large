---
title: "Content Modeling: Lessons from Solo Developers"
created-on: "2026-03-11T02:00:00Z"
updated-on: "2026-04-21T02:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

Most teams only notice content modeling once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
