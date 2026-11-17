---
title: "Getting Started with RSS Feeds for Nonprofits"
created-on: "2024-01-22T11:45:00Z"
updated-on: "2024-02-13T11:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

Most teams only notice rss feeds once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
