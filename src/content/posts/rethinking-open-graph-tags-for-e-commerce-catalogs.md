---
title: "Rethinking Open Graph Tags for E-commerce Catalogs"
created-on: "2025-02-08T11:45:00Z"
updated-on: "2025-03-04T11:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

We rebuilt our approach to open graph tags three times last year. Here is what survived.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
