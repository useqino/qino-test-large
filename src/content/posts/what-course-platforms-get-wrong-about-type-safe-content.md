---
title: "What Course Platforms Get Wrong About Type-Safe Content"
created-on: "2024-02-29T10:30:00Z"
updated-on: "2024-03-07T10:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about type-safe content. It grew, because every answer raised two more questions.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

If you take one thing away, make it this: decide on purpose, and write the decision down.
