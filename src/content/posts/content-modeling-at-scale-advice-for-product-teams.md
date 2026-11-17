---
title: "Content Modeling at Scale: Advice for Product Teams"
created-on: "2021-04-03T02:00:00Z"
updated-on: "2021-05-27T02:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that content modeling is solved. Spend a week with product teams and that consensus falls apart quickly.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
