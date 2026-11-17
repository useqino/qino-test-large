---
title: "The Hidden Cost of Redirect Maps for Content Editors"
created-on: "2021-06-14T08:30:00Z"
updated-on: "2021-07-24T08:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

If you work with content editors, you have probably met redirect maps in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
