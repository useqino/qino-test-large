---
title: "Content Relations for News Publishers"
created-on: "2024-12-15T03:45:00Z"
updated-on: "2025-02-01T03:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

content relations sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
