---
title: "A Second Look at Incremental Builds for Open Source Projects"
created-on: "2024-11-03T18:45:00Z"
updated-on: "2024-11-29T18:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

Most teams only notice incremental builds once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
