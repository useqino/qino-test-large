---
title: "Common Mistakes in Type-Safe Content Made by Large Archives"
created-on: "2021-01-18T21:15:00Z"
updated-on: "2021-01-19T21:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about type-safe content. It grew, because every answer raised two more questions.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
