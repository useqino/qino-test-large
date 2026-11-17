---
title: "Rich Text Editors, Revisited by Content Editors"
created-on: "2024-04-11T21:15:00Z"
updated-on: "2024-05-24T21:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about rich text editors. It grew, because every answer raised two more questions.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
