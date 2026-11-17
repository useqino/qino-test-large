---
title: "Ten Questions About Taxonomies from Large Archives"
created-on: "2022-04-27T04:00:00Z"
updated-on: "2022-06-17T04:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

If you work with large archives, you have probably met taxonomies in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
