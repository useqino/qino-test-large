---
title: "Notes on Structured Data for Marketing Sites"
created-on: "2024-06-09T21:45:00Z"
updated-on: "2024-07-20T21:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

If you work with marketing sites, you have probably met structured data in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
