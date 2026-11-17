---
title: "Sitemaps Patterns That Work for Technical Writers"
created-on: "2024-11-13T01:00:00Z"
updated-on: "2024-11-29T01:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

We rebuilt our approach to sitemaps three times last year. Here is what survived.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
