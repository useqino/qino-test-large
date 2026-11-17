---
title: "Markdown Frontmatter for Large Archives"
created-on: "2024-12-06T16:30:00Z"
updated-on: "2025-02-03T16:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

If you work with large archives, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
