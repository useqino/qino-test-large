---
title: "A Checklist for Content Versioning Aimed at Agencies"
created-on: "2022-11-21T17:45:00Z"
updated-on: "2022-12-28T17:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about content versioning. It grew, because every answer raised two more questions.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
