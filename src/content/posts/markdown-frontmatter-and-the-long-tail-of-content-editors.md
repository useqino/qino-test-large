---
title: "Markdown Frontmatter and the Long Tail of Content Editors"
created-on: "2021-02-26T14:45:00Z"
updated-on: "2021-04-06T14:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

We rebuilt our approach to markdown frontmatter three times last year. Here is what survived.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
