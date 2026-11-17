---
title: "A Checklist for Rich Text Editors Aimed at Startups"
created-on: "2024-06-19T09:00:00Z"
updated-on: "2024-07-30T09:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

We rebuilt our approach to rich text editors three times last year. Here is what survived.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
