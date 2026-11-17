---
title: "Rethinking Editorial Workflows for Personal Blogs"
created-on: "2026-06-05T09:15:00Z"
updated-on: "2026-07-10T09:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

If you work with personal blogs, you have probably met editorial workflows in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
