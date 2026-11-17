---
title: "How News Publishers Approach Taxonomies"
created-on: "2022-04-14T15:15:00Z"
updated-on: "2022-05-10T15:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

Most teams only notice taxonomies once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
