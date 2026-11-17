---
title: "Taxonomies for Open Source Projects"
created-on: "2025-06-26T03:15:00Z"
updated-on: "2025-07-11T03:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/editorial.json"
---

There is a quiet consensus that taxonomies is solved. Spend a week with open source projects and that consensus falls apart quickly.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
