---
title: "The Case for Content Linting Among Course Platforms"
created-on: "2025-01-18T09:15:00Z"
updated-on: "2025-03-07T09:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

If you work with course platforms, you have probably met content linting in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
