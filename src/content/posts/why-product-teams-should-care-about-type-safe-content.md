---
title: "Why Product Teams Should Care About Type-Safe Content"
created-on: "2021-09-05T07:30:00Z"
updated-on: "2021-10-29T07:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

If you work with product teams, you have probably met type-safe content in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
