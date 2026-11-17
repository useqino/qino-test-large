---
title: "Incremental Builds in Practice: A Field Report from News Publishers"
created-on: "2026-08-14T20:45:00Z"
updated-on: "2026-09-30T20:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about incremental builds. It grew, because every answer raised two more questions.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
