---
title: "The Hidden Cost of Taxonomies for Design Systems"
created-on: "2025-07-21T01:00:00Z"
updated-on: "2025-08-26T01:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/editorial.json"
---

If you work with design systems, you have probably met taxonomies in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
