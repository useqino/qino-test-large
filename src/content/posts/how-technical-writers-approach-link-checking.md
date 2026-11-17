---
title: "How Technical Writers Approach Link Checking"
created-on: "2025-12-03T17:30:00Z"
updated-on: "2026-01-26T17:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

link checking sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
