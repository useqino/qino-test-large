---
title: "Getting Started with Incremental Builds for Podcast Sites"
created-on: "2026-10-03T02:15:00Z"
updated-on: "2026-10-25T02:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

Most teams only notice incremental builds once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
