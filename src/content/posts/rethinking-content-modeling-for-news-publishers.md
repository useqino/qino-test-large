---
title: "Rethinking Content Modeling for News Publishers"
created-on: "2021-08-16T01:15:00Z"
updated-on: "2021-08-29T01:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/markdown.json"
---

If you work with news publishers, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
