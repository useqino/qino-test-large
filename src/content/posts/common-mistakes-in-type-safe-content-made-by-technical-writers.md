---
title: "Common Mistakes in Type-Safe Content Made by Technical Writers"
created-on: "2022-06-29T06:30:00Z"
updated-on: "2022-08-01T06:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

If you work with technical writers, you have probably met type-safe content in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
