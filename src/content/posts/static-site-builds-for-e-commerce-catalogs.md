---
title: "Static Site Builds for E-commerce Catalogs"
created-on: "2023-09-03T10:15:00Z"
updated-on: "2023-10-13T10:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

If you work with e-commerce catalogs, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
