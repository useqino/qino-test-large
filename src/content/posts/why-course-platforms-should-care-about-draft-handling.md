---
title: "Why Course Platforms Should Care About Draft Handling"
created-on: "2025-12-13T03:15:00Z"
updated-on: "2025-12-17T03:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/markdown.json"
---

Most teams only notice draft handling once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
