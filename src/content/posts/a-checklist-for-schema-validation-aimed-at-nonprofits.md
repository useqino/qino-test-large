---
title: "A Checklist for Schema Validation Aimed at Nonprofits"
created-on: "2026-07-27T18:00:00Z"
updated-on: "2026-08-02T18:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/jane-doe.json"
category: "categories/architecture.json"
---

There is a quiet consensus that schema validation is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
