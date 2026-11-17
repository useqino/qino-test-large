---
title: "Schema Validation at Scale: Advice for Open Source Projects"
created-on: "2025-06-22T22:45:00Z"
updated-on: "2025-08-02T22:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to schema validation three times last year. Here is what survived.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
