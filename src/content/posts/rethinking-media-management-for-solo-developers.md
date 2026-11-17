---
title: "Rethinking Media Management for Solo Developers"
created-on: "2023-10-17T14:00:00Z"
updated-on: "2023-10-26T14:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/seo.json"
---

If you work with solo developers, you have probably met media management in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
