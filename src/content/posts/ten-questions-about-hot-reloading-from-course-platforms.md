---
title: "Ten Questions About Hot Reloading from Course Platforms"
created-on: "2022-05-19T11:30:00Z"
updated-on: "2022-05-25T11:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/architecture.json"
---

If you work with course platforms, you have probably met hot reloading in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
