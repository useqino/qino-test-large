---
title: "Measuring Alt Text as Small Teams"
created-on: "2024-04-18T22:30:00Z"
updated-on: "2024-05-17T22:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/diego-moreno.json"
category: "categories/architecture.json"
---

There is a quiet consensus that alt text is solved. Spend a week with small teams and that consensus falls apart quickly.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
