---
title: "A Practical Guide to Structured Data for Enterprises"
created-on: "2023-11-28T02:15:00Z"
updated-on: "2023-11-28T02:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about structured data. It grew, because every answer raised two more questions.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
