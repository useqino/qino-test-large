---
title: "Getting Started with Content Modeling for Documentation Sites"
created-on: "2024-11-23T13:15:00Z"
updated-on: "2025-01-16T13:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

If you work with documentation sites, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
