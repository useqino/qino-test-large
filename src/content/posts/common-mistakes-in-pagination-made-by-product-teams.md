---
title: "Common Mistakes in Pagination Made by Product Teams"
created-on: "2026-03-22T23:00:00Z"
updated-on: "2026-04-05T23:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

Most teams only notice pagination once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
