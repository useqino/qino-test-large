---
title: "Notes on Rich Text Editors for Course Platforms"
created-on: "2021-09-07T18:30:00Z"
updated-on: "2021-10-13T18:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/amara-okonkwo.json"
category: "categories/philosophy.json"
---

If you work with course platforms, you have probably met rich text editors in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
