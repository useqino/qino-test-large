---
title: "Getting Started with Reading Time for Startups"
created-on: "2023-12-18T05:00:00Z"
updated-on: "2023-12-23T05:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

If you work with startups, you have probably met reading time in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
