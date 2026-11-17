---
title: "The Case for Content Versioning Among News Publishers"
created-on: "2026-07-09T01:15:00Z"
updated-on: "2026-09-02T01:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

If you work with news publishers, you have probably met content versioning in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
