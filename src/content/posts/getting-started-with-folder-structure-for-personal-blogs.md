---
title: "Getting Started with Folder Structure for Personal Blogs"
created-on: "2022-08-24T22:15:00Z"
updated-on: "2022-08-29T22:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

There is a quiet consensus that folder structure is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

If you take one thing away, make it this: decide on purpose, and write the decision down.
