---
title: "Measuring Code Highlighting as Small Teams"
created-on: "2024-09-10T00:15:00Z"
updated-on: "2024-09-21T00:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/philosophy.json"
---

code highlighting sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
