---
title: "Build Caching Patterns That Work for Nonprofits"
created-on: "2025-01-30T07:30:00Z"
updated-on: "2025-02-07T07:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

If you work with nonprofits, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
