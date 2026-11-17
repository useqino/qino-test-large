---
title: "What Documentation Sites Get Wrong About Author Profiles"
created-on: "2021-09-22T17:00:00Z"
updated-on: "2021-10-30T17:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

If you work with documentation sites, you have probably met author profiles in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
