---
title: "A Practical Guide to Type-Safe Content for Marketing Sites"
created-on: "2024-06-13T10:45:00Z"
updated-on: "2024-08-08T10:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

If you work with marketing sites, you have probably met type-safe content in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
