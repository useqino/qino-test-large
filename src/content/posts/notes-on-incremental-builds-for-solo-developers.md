---
title: "Notes on Incremental Builds for Solo Developers"
created-on: "2021-08-02T15:15:00Z"
updated-on: "2021-09-13T15:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

If you work with solo developers, you have probably met incremental builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
