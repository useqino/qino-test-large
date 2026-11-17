---
title: "Pull Request Reviews Patterns That Work for Personal Blogs"
created-on: "2021-11-15T05:00:00Z"
updated-on: "2022-01-07T05:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

If you work with personal blogs, you have probably met pull request reviews in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

If you take one thing away, make it this: decide on purpose, and write the decision down.
