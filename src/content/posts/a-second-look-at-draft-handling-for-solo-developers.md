---
title: "A Second Look at Draft Handling for Solo Developers"
created-on: "2022-10-25T19:00:00Z"
updated-on: "2022-11-20T19:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

If you work with solo developers, you have probably met draft handling in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
