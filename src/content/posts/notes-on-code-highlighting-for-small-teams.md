---
title: "Notes on Code Highlighting for Small Teams"
created-on: "2024-08-06T16:15:00Z"
updated-on: "2024-09-19T16:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

There is a quiet consensus that code highlighting is solved. Spend a week with small teams and that consensus falls apart quickly.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
