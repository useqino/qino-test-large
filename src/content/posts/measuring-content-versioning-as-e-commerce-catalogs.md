---
title: "Measuring Content Versioning as E-commerce Catalogs"
created-on: "2022-02-18T22:00:00Z"
updated-on: "2022-03-11T22:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to content versioning three times last year. Here is what survived.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
