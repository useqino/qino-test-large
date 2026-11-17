---
title: "Ten Questions About Content Versioning from Startups"
created-on: "2024-01-04T21:45:00Z"
updated-on: "2024-02-29T21:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that content versioning is solved. Spend a week with startups and that consensus falls apart quickly.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

If you take one thing away, make it this: decide on purpose, and write the decision down.
