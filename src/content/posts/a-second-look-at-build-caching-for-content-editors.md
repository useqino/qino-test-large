---
title: "A Second Look at Build Caching for Content Editors"
created-on: "2024-10-01T07:15:00Z"
updated-on: "2024-10-03T07:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

If you work with content editors, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
