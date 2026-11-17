---
title: "Ten Questions About RSS Feeds from Design Systems"
created-on: "2023-03-15T20:00:00Z"
updated-on: "2023-05-13T20:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that rss feeds is solved. Spend a week with design systems and that consensus falls apart quickly.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
