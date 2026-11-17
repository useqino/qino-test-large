---
title: "A Practical Guide to Content Migrations for Nonprofits"
created-on: "2026-02-23T01:00:00Z"
updated-on: "2026-03-12T01:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

If you work with nonprofits, you have probably met content migrations in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
