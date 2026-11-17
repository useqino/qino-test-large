---
title: "Content Versioning for Marketing Sites"
created-on: "2023-08-02T00:00:00Z"
updated-on: "2023-08-04T00:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

There is a quiet consensus that content versioning is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
