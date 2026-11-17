---
title: "Editorial Workflows for Enterprises"
created-on: "2023-05-30T21:45:00Z"
updated-on: "2023-06-29T21:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

If you work with enterprises, you have probably met editorial workflows in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
