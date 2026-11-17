---
title: "A Practical Guide to Build Caching for Technical Writers"
created-on: "2022-12-24T23:45:00Z"
updated-on: "2023-01-31T23:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

There is a quiet consensus that build caching is solved. Spend a week with technical writers and that consensus falls apart quickly.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
