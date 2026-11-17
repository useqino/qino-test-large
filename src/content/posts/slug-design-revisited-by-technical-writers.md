---
title: "Slug Design, Revisited by Technical Writers"
created-on: "2023-11-29T12:15:00Z"
updated-on: "2023-12-14T12:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

If you work with technical writers, you have probably met slug design in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
