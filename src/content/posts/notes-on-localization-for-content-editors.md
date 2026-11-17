---
title: "Notes on Localization for Content Editors"
created-on: "2026-02-07T00:30:00Z"
updated-on: "2026-03-28T00:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

There is a quiet consensus that localization is solved. Spend a week with content editors and that consensus falls apart quickly.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
