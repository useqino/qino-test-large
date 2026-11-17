---
title: "Reading Time and the Long Tail of Content Editors"
created-on: "2024-05-06T15:45:00Z"
updated-on: "2024-05-19T15:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

reading time sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
