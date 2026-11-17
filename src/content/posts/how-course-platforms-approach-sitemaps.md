---
title: "How Course Platforms Approach Sitemaps"
created-on: "2021-07-23T18:45:00Z"
updated-on: "2021-09-14T18:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

If you work with course platforms, you have probably met sitemaps in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
