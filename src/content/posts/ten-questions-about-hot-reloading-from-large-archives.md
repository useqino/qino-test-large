---
title: "Ten Questions About Hot Reloading from Large Archives"
created-on: "2022-10-31T22:30:00Z"
updated-on: "2022-12-26T22:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/markdown.json"
---

If you work with large archives, you have probably met hot reloading in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

If you take one thing away, make it this: decide on purpose, and write the decision down.
