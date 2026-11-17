---
title: "Incremental Builds: Lessons from Documentation Sites"
created-on: "2024-03-01T20:15:00Z"
updated-on: "2024-04-18T20:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/performance.json"
---

There is a quiet consensus that incremental builds is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
