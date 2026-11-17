---
title: "Hot Reloading Without the Hype, for Product Teams"
created-on: "2024-01-05T12:15:00Z"
updated-on: "2024-01-17T12:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

If you work with product teams, you have probably met hot reloading in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
