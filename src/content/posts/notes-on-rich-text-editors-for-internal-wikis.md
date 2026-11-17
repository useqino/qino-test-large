---
title: "Notes on Rich Text Editors for Internal Wikis"
created-on: "2022-02-20T18:15:00Z"
updated-on: "2022-03-03T18:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/seo.json"
---

rich text editors sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
