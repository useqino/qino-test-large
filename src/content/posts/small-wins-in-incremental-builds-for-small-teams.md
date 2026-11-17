---
title: "Small Wins in Incremental Builds for Small Teams"
created-on: "2024-12-02T10:00:00Z"
updated-on: "2025-01-23T10:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/markdown.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
