---
title: "Getting Started with Content Linting for Podcast Sites"
created-on: "2024-07-03T16:30:00Z"
updated-on: "2024-07-04T16:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

If you work with podcast sites, you have probably met content linting in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
