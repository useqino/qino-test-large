---
title: "Media Management at Scale: Advice for Course Platforms"
created-on: "2025-10-26T10:00:00Z"
updated-on: "2025-11-09T10:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that media management is solved. Spend a week with course platforms and that consensus falls apart quickly.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
