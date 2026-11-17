---
title: "Content Linting at Scale: Advice for Nonprofits"
created-on: "2025-12-23T11:15:00Z"
updated-on: "2025-12-31T11:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

There is a quiet consensus that content linting is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
