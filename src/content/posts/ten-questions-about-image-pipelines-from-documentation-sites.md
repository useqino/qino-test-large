---
title: "Ten Questions About Image Pipelines from Documentation Sites"
created-on: "2025-10-05T10:00:00Z"
updated-on: "2025-11-06T10:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

There is a quiet consensus that image pipelines is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
