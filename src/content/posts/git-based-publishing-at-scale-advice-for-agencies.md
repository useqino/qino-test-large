---
title: "Git-Based Publishing at Scale: Advice for Agencies"
created-on: "2025-11-15T13:00:00Z"
updated-on: "2025-11-29T13:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

There is a quiet consensus that git-based publishing is solved. Spend a week with agencies and that consensus falls apart quickly.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
