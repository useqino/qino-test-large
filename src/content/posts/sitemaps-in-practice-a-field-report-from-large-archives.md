---
title: "Sitemaps in Practice: A Field Report from Large Archives"
created-on: "2023-05-10T21:45:00Z"
updated-on: "2023-05-14T21:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about sitemaps. It grew, because every answer raised two more questions.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
