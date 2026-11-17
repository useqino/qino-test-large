---
title: "The Hidden Cost of Rich Text Editors for Technical Writers"
created-on: "2025-09-25T07:45:00Z"
updated-on: "2025-11-16T07:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about rich text editors. It grew, because every answer raised two more questions.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
