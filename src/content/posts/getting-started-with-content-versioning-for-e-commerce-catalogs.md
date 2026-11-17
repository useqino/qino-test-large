---
title: "Getting Started with Content Versioning for E-commerce Catalogs"
created-on: "2020-12-21T23:30:00Z"
updated-on: "2021-01-02T23:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

If you work with e-commerce catalogs, you have probably met content versioning in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
