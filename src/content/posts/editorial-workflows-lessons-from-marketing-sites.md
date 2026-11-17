---
title: "Editorial Workflows: Lessons from Marketing Sites"
created-on: "2026-01-13T12:00:00Z"
updated-on: "2026-02-26T12:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

editorial workflows sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
