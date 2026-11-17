---
title: "The Hidden Cost of Link Checking for Design Systems"
created-on: "2023-08-15T05:15:00Z"
updated-on: "2023-10-05T05:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

link checking sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
