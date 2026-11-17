---
title: "Debugging Link Checking as Nonprofits"
created-on: "2023-12-29T14:15:00Z"
updated-on: "2024-02-17T14:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

link checking sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
