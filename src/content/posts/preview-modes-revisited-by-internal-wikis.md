---
title: "Preview Modes, Revisited by Internal Wikis"
created-on: "2023-02-09T09:45:00Z"
updated-on: "2023-03-10T09:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

If you work with internal wikis, you have probably met preview modes in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
