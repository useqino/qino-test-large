---
title: "Incremental Builds, Revisited by Product Teams"
created-on: "2022-06-13T08:45:00Z"
updated-on: "2022-08-07T08:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/seo.json"
---

If you work with product teams, you have probably met incremental builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
