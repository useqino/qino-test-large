---
title: "Schema Validation Patterns That Work for Solo Developers"
created-on: "2026-06-07T15:15:00Z"
updated-on: "2026-07-07T15:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that schema validation is solved. Spend a week with solo developers and that consensus falls apart quickly.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
