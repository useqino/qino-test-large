---
title: "What News Publishers Get Wrong About Reading Time"
created-on: "2021-10-17T04:00:00Z"
updated-on: "2021-11-17T04:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

reading time sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
