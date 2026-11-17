---
title: "Debugging Reading Time as E-commerce Catalogs"
created-on: "2025-11-06T10:15:00Z"
updated-on: "2026-01-02T10:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

There is a quiet consensus that reading time is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

If you take one thing away, make it this: decide on purpose, and write the decision down.
