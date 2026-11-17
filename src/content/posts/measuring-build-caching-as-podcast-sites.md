---
title: "Measuring Build Caching as Podcast Sites"
created-on: "2024-02-11T05:30:00Z"
updated-on: "2024-04-05T05:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

build caching sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
