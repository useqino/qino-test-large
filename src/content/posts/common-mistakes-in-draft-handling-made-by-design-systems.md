---
title: "Common Mistakes in Draft Handling Made by Design Systems"
created-on: "2021-11-15T04:00:00Z"
updated-on: "2021-12-09T04:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

There is a quiet consensus that draft handling is solved. Spend a week with design systems and that consensus falls apart quickly.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

If you take one thing away, make it this: decide on purpose, and write the decision down.
