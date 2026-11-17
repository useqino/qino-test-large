---
title: "What Course Platforms Get Wrong About Content Linting"
created-on: "2020-12-15T21:30:00Z"
updated-on: "2021-02-09T21:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/performance.json"
---

There is a quiet consensus that content linting is solved. Spend a week with course platforms and that consensus falls apart quickly.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
