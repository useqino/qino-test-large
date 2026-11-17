---
title: "A Checklist for Localization Aimed at News Publishers"
created-on: "2024-12-12T23:00:00Z"
updated-on: "2025-01-13T23:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about localization. It grew, because every answer raised two more questions.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
