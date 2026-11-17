---
title: "A Checklist for Pagination Aimed at Solo Developers"
created-on: "2024-01-22T13:45:00Z"
updated-on: "2024-03-20T13:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about pagination. It grew, because every answer raised two more questions.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

If you take one thing away, make it this: decide on purpose, and write the decision down.
