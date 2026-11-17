---
title: "Content Relations Without the Hype, for Content Editors"
created-on: "2021-02-03T17:15:00Z"
updated-on: "2021-03-03T17:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

If you work with content editors, you have probably met content relations in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
