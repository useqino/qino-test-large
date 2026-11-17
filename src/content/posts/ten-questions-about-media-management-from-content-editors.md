---
title: "Ten Questions About Media Management from Content Editors"
created-on: "2021-03-25T11:45:00Z"
updated-on: "2021-05-18T11:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/editorial.json"
---

There is a quiet consensus that media management is solved. Spend a week with content editors and that consensus falls apart quickly.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
