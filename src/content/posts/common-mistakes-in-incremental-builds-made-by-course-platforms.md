---
title: "Common Mistakes in Incremental Builds Made by Course Platforms"
created-on: "2021-06-17T23:00:00Z"
updated-on: "2021-08-10T23:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

If you work with course platforms, you have probably met incremental builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
