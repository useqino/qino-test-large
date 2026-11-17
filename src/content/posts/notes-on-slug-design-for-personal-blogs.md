---
title: "Notes on Slug Design for Personal Blogs"
created-on: "2023-02-16T08:00:00Z"
updated-on: "2023-04-04T08:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

Most teams only notice slug design once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
