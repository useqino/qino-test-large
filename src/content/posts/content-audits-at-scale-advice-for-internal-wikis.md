---
title: "Content Audits at Scale: Advice for Internal Wikis"
created-on: "2023-12-13T20:30:00Z"
updated-on: "2024-01-11T20:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

If you work with internal wikis, you have probably met content audits in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
