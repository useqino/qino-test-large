---
title: "Taxonomies, Revisited by News Publishers"
created-on: "2023-01-22T09:30:00Z"
updated-on: "2023-03-07T09:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about taxonomies. It grew, because every answer raised two more questions.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
