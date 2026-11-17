---
title: "How Product Teams Approach Content Linting"
created-on: "2022-12-30T03:45:00Z"
updated-on: "2023-02-17T03:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

We rebuilt our approach to content linting three times last year. Here is what survived.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
