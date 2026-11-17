---
title: "Ten Questions About Build Caching from E-commerce Catalogs"
created-on: "2023-08-31T21:15:00Z"
updated-on: "2023-09-23T21:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

If you work with e-commerce catalogs, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
