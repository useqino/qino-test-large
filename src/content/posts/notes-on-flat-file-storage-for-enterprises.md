---
title: "Notes on Flat-File Storage for Enterprises"
created-on: "2021-12-14T00:15:00Z"
updated-on: "2021-12-25T00:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/tomas-silva.json"
category: "categories/editorial.json"
---

If you work with enterprises, you have probably met flat-file storage in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
