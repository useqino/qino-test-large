---
title: "A Checklist for Pull Request Reviews Aimed at Technical Writers"
created-on: "2025-02-17T08:45:00Z"
updated-on: "2025-04-07T08:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

Most teams only notice pull request reviews once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
