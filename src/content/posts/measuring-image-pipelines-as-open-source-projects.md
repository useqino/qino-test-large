---
title: "Measuring Image Pipelines as Open Source Projects"
created-on: "2025-11-02T01:00:00Z"
updated-on: "2025-12-04T01:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

Most teams only notice image pipelines once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
