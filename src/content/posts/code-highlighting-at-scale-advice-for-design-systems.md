---
title: "Code Highlighting at Scale: Advice for Design Systems"
created-on: "2026-01-04T08:45:00Z"
updated-on: "2026-02-07T08:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about code highlighting. It grew, because every answer raised two more questions.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
