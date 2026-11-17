---
title: "Rethinking Code Highlighting for Marketing Sites"
created-on: "2025-08-07T01:15:00Z"
updated-on: "2025-09-05T01:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

If you work with marketing sites, you have probably met code highlighting in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
