---
title: "Content Migrations in Practice: A Field Report from Personal Blogs"
created-on: "2025-09-18T00:30:00Z"
updated-on: "2025-09-29T00:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

If you work with personal blogs, you have probably met content migrations in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
