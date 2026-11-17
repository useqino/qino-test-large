---
title: "Incremental Builds in Practice: A Field Report from Open Source Projects"
created-on: "2020-12-21T11:15:00Z"
updated-on: "2021-01-30T11:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about incremental builds. It grew, because every answer raised two more questions.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
