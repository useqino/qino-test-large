---
title: "Small Wins in Content Linting for Internal Wikis"
created-on: "2021-08-03T03:00:00Z"
updated-on: "2021-08-13T03:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about content linting. It grew, because every answer raised two more questions.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

If you take one thing away, make it this: decide on purpose, and write the decision down.
