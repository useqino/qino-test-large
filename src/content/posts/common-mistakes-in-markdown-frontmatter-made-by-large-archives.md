---
title: "Common Mistakes in Markdown Frontmatter Made by Large Archives"
created-on: "2024-12-03T00:15:00Z"
updated-on: "2025-01-03T00:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

If you work with large archives, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
