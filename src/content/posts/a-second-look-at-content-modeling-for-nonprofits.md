---
title: "A Second Look at Content Modeling for Nonprofits"
created-on: "2024-02-25T01:30:00Z"
updated-on: "2024-03-03T01:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about content modeling. It grew, because every answer raised two more questions.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
