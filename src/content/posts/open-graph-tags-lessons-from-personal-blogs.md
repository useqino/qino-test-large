---
title: "Open Graph Tags: Lessons from Personal Blogs"
created-on: "2024-12-26T18:45:00Z"
updated-on: "2025-02-22T18:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

Most teams only notice open graph tags once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
