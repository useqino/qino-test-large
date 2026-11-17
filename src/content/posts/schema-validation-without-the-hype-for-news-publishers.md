---
title: "Schema Validation Without the Hype, for News Publishers"
created-on: "2023-09-04T01:15:00Z"
updated-on: "2023-10-13T01:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

schema validation sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
