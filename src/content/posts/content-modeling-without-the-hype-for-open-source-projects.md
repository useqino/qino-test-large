---
title: "Content Modeling Without the Hype, for Open Source Projects"
created-on: "2026-02-21T12:15:00Z"
updated-on: "2026-03-26T12:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about content modeling. It grew, because every answer raised two more questions.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
