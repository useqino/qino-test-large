---
title: "Debugging Redirect Maps as Large Archives"
created-on: "2026-03-08T13:45:00Z"
updated-on: "2026-05-01T13:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about redirect maps. It grew, because every answer raised two more questions.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
