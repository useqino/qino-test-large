---
title: "Teaching Link Checking to E-commerce Catalogs"
created-on: "2024-07-31T04:45:00Z"
updated-on: "2024-09-28T04:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/content-modeling.json"
---

If you work with e-commerce catalogs, you have probably met link checking in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

If you take one thing away, make it this: decide on purpose, and write the decision down.
