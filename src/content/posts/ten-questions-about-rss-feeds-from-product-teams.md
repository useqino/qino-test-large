---
title: "Ten Questions About RSS Feeds from Product Teams"
created-on: "2021-12-14T21:00:00Z"
updated-on: "2022-01-31T21:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

Most teams only notice rss feeds once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

If you take one thing away, make it this: decide on purpose, and write the decision down.
