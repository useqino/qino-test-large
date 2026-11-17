---
title: "What Content Editors Get Wrong About Build Caching"
created-on: "2024-02-03T07:45:00Z"
updated-on: "2024-03-09T07:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

If you work with content editors, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
