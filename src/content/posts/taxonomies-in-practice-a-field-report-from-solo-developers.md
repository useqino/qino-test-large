---
title: "Taxonomies in Practice: A Field Report from Solo Developers"
created-on: "2021-10-09T16:30:00Z"
updated-on: "2021-10-30T16:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

taxonomies sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
