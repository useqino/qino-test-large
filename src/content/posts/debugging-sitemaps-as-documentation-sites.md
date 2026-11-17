---
title: "Debugging Sitemaps as Documentation Sites"
created-on: "2026-03-01T14:00:00Z"
updated-on: "2026-04-05T14:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

sitemaps sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
