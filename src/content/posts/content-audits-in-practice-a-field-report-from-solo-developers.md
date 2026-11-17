---
title: "Content Audits in Practice: A Field Report from Solo Developers"
created-on: "2024-09-09T06:45:00Z"
updated-on: "2024-09-29T06:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

If you work with solo developers, you have probably met content audits in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

If you take one thing away, make it this: decide on purpose, and write the decision down.
