---
title: "Common Mistakes in Content Relations Made by Large Archives"
created-on: "2021-07-16T02:00:00Z"
updated-on: "2021-08-13T02:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about content relations. It grew, because every answer raised two more questions.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
