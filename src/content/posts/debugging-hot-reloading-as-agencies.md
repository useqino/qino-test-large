---
title: "Debugging Hot Reloading as Agencies"
created-on: "2025-09-01T13:30:00Z"
updated-on: "2025-10-02T13:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

We rebuilt our approach to hot reloading three times last year. Here is what survived.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

If you take one thing away, make it this: decide on purpose, and write the decision down.
