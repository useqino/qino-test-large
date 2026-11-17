---
title: "Common Mistakes in Search Indexing Made by Open Source Projects"
created-on: "2025-02-04T15:30:00Z"
updated-on: "2025-03-02T15:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

If you work with open source projects, you have probably met search indexing in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
