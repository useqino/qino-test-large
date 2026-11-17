---
title: "What Agencies Get Wrong About Flat-File Storage"
created-on: "2022-03-16T18:00:00Z"
updated-on: "2022-04-03T18:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/editorial.json"
---

Most teams only notice flat-file storage once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
