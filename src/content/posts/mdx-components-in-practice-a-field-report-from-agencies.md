---
title: "MDX Components in Practice: A Field Report from Agencies"
created-on: "2026-07-11T08:30:00Z"
updated-on: "2026-07-24T08:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/content-modeling.json"
---

mdx components sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
