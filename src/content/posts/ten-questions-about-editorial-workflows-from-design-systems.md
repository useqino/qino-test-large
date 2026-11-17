---
title: "Ten Questions About Editorial Workflows from Design Systems"
created-on: "2020-11-02T08:00:00Z"
updated-on: "2020-11-20T08:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about editorial workflows. It grew, because every answer raised two more questions.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
