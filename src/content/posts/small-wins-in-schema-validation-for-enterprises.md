---
title: "Small Wins in Schema Validation for Enterprises"
created-on: "2022-07-04T15:00:00Z"
updated-on: "2022-07-22T15:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

We rebuilt our approach to schema validation three times last year. Here is what survived.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
