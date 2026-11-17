---
title: "Pull Request Reviews: Lessons from Open Source Projects"
created-on: "2024-04-02T14:30:00Z"
updated-on: "2024-05-26T14:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/seo.json"
---

We rebuilt our approach to pull request reviews three times last year. Here is what survived.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
