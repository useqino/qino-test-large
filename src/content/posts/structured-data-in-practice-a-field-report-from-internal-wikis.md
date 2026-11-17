---
title: "Structured Data in Practice: A Field Report from Internal Wikis"
created-on: "2024-04-03T18:15:00Z"
updated-on: "2024-05-30T18:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that structured data is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
