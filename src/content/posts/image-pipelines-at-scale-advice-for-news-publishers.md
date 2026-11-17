---
title: "Image Pipelines at Scale: Advice for News Publishers"
created-on: "2021-03-19T12:30:00Z"
updated-on: "2021-05-15T12:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about image pipelines. It grew, because every answer raised two more questions.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
