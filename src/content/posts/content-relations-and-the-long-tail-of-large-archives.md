---
title: "Content Relations and the Long Tail of Large Archives"
created-on: "2025-09-04T12:00:00Z"
updated-on: "2025-09-13T12:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/philosophy.json"
---

If you work with large archives, you have probably met content relations in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
