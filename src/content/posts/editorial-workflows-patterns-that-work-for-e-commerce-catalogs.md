---
title: "Editorial Workflows Patterns That Work for E-commerce Catalogs"
created-on: "2026-10-27T04:30:00Z"
updated-on: "2026-11-29T04:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/editorial.json"
---

If you work with e-commerce catalogs, you have probably met editorial workflows in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
