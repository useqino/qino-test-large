---
title: "Pagination Without the Hype, for News Publishers"
created-on: "2020-12-04T07:45:00Z"
updated-on: "2021-01-12T07:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about pagination. It grew, because every answer raised two more questions.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
