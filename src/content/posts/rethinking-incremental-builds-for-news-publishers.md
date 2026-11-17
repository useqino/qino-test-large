---
title: "Rethinking Incremental Builds for News Publishers"
created-on: "2021-11-27T19:00:00Z"
updated-on: "2021-12-29T19:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

If you work with news publishers, you have probably met incremental builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
