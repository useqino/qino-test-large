---
title: "Why Marketing Sites Should Care About Search Indexing"
created-on: "2021-05-11T13:45:00Z"
updated-on: "2021-07-04T13:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
