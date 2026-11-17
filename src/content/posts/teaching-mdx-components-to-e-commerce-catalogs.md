---
title: "Teaching MDX Components to E-commerce Catalogs"
created-on: "2026-01-15T11:45:00Z"
updated-on: "2026-01-29T11:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

There is a quiet consensus that mdx components is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
