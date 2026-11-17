---
title: "Author Profiles Patterns That Work for Marketing Sites"
created-on: "2026-08-19T14:15:00Z"
updated-on: "2026-08-31T14:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

There is a quiet consensus that author profiles is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
