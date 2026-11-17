---
title: "Teaching Content Modeling to Open Source Projects"
created-on: "2025-02-10T13:45:00Z"
updated-on: "2025-02-24T13:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

If you work with open source projects, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
