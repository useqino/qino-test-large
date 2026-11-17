---
title: "Notes on Rich Text Editors for Product Teams"
created-on: "2022-09-14T12:00:00Z"
updated-on: "2022-10-11T12:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

If you work with product teams, you have probably met rich text editors in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
