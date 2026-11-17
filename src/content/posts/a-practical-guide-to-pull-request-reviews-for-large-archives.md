---
title: "A Practical Guide to Pull Request Reviews for Large Archives"
created-on: "2025-03-10T00:15:00Z"
updated-on: "2025-04-03T00:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

Most teams only notice pull request reviews once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
