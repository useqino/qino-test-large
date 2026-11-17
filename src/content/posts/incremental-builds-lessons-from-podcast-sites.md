---
title: "Incremental Builds: Lessons from Podcast Sites"
created-on: "2024-07-22T01:15:00Z"
updated-on: "2024-09-18T01:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

If you work with podcast sites, you have probably met incremental builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
