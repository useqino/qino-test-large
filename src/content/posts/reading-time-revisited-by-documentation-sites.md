---
title: "Reading Time, Revisited by Documentation Sites"
created-on: "2021-03-12T02:30:00Z"
updated-on: "2021-04-24T02:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to reading time three times last year. Here is what survived.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
