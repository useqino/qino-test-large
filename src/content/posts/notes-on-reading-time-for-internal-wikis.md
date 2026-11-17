---
title: "Notes on Reading Time for Internal Wikis"
created-on: "2025-04-13T07:45:00Z"
updated-on: "2025-05-26T07:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/amara-okonkwo.json"
category: "categories/tooling.json"
---

We rebuilt our approach to reading time three times last year. Here is what survived.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
