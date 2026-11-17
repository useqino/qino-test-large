---
title: "What Personal Blogs Get Wrong About Structured Data"
created-on: "2024-09-28T17:00:00Z"
updated-on: "2024-10-19T17:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about structured data. It grew, because every answer raised two more questions.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
