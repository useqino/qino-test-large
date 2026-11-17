---
title: "Ten Questions About Media Management from Internal Wikis"
created-on: "2023-08-03T13:30:00Z"
updated-on: "2023-08-11T13:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/diego-moreno.json"
category: "categories/architecture.json"
---

We rebuilt our approach to media management three times last year. Here is what survived.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
