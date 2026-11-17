---
title: "Getting Started with Pagination for Content Editors"
created-on: "2023-08-04T05:45:00Z"
updated-on: "2023-09-26T05:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about pagination. It grew, because every answer raised two more questions.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
