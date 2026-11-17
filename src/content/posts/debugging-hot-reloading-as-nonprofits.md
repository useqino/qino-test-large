---
title: "Debugging Hot Reloading as Nonprofits"
created-on: "2021-04-07T05:30:00Z"
updated-on: "2021-04-17T05:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about hot reloading. It grew, because every answer raised two more questions.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
