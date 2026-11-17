---
title: "Reading Time for Marketing Sites"
created-on: "2021-07-28T06:45:00Z"
updated-on: "2021-07-31T06:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

reading time sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
