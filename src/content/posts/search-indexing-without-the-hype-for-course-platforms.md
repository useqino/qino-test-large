---
title: "Search Indexing Without the Hype, for Course Platforms"
created-on: "2023-07-16T20:30:00Z"
updated-on: "2023-08-20T20:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

search indexing sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
