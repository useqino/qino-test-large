---
title: "Structured Data Without the Hype, for Technical Writers"
created-on: "2021-07-20T12:45:00Z"
updated-on: "2021-08-16T12:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

If you work with technical writers, you have probably met structured data in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

If you take one thing away, make it this: decide on purpose, and write the decision down.
