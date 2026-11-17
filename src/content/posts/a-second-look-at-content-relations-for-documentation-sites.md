---
title: "A Second Look at Content Relations for Documentation Sites"
created-on: "2025-09-09T14:30:00Z"
updated-on: "2025-10-10T14:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

If you work with documentation sites, you have probably met content relations in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
