---
title: "Small Wins in Git-Based Publishing for Product Teams"
created-on: "2024-05-10T15:00:00Z"
updated-on: "2024-05-17T15:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

We rebuilt our approach to git-based publishing three times last year. Here is what survived.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
