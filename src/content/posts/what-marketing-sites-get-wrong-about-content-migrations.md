---
title: "What Marketing Sites Get Wrong About Content Migrations"
created-on: "2022-09-21T08:30:00Z"
updated-on: "2022-10-09T08:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about content migrations. It grew, because every answer raised two more questions.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
