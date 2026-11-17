---
title: "Getting Started with Pagination for Agencies"
created-on: "2023-04-20T07:00:00Z"
updated-on: "2023-06-10T07:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

Most teams only notice pagination once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
