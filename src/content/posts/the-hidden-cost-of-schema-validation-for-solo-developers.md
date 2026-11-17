---
title: "The Hidden Cost of Schema Validation for Solo Developers"
created-on: "2023-05-02T15:30:00Z"
updated-on: "2023-05-08T15:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about schema validation. It grew, because every answer raised two more questions.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
