---
title: "Alt Text and the Long Tail of Internal Wikis"
created-on: "2023-02-26T19:00:00Z"
updated-on: "2023-04-10T19:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

If you work with internal wikis, you have probably met alt text in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
