---
title: "A Second Look at Git-Based Publishing for E-commerce Catalogs"
created-on: "2022-03-16T03:00:00Z"
updated-on: "2022-03-20T03:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/priya-krishnan.json"
category: "categories/seo.json"
---

If you work with e-commerce catalogs, you have probably met git-based publishing in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
