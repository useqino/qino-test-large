---
title: "A Second Look at Redirect Maps for Personal Blogs"
created-on: "2023-02-24T18:00:00Z"
updated-on: "2023-03-16T18:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

If you work with personal blogs, you have probably met redirect maps in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
