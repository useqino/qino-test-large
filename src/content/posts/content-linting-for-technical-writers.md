---
title: "Content Linting for Technical Writers"
created-on: "2022-08-08T11:15:00Z"
updated-on: "2022-09-14T11:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

content linting sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
