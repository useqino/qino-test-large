---
title: "Content Relations at Scale: Advice for E-commerce Catalogs"
created-on: "2026-09-08T03:00:00Z"
updated-on: "2026-11-06T03:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to content relations three times last year. Here is what survived.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
