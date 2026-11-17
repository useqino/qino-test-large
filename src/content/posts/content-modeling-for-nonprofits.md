---
title: "Content Modeling for Nonprofits"
created-on: "2021-03-15T14:30:00Z"
updated-on: "2021-04-24T14:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

If you work with nonprofits, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
