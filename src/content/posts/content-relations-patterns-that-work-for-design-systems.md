---
title: "Content Relations Patterns That Work for Design Systems"
created-on: "2021-08-03T19:30:00Z"
updated-on: "2021-10-01T19:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that content relations is solved. Spend a week with design systems and that consensus falls apart quickly.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
