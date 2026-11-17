---
title: "What Product Teams Get Wrong About Content Versioning"
created-on: "2023-06-24T12:30:00Z"
updated-on: "2023-07-28T12:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

There is a quiet consensus that content versioning is solved. Spend a week with product teams and that consensus falls apart quickly.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
