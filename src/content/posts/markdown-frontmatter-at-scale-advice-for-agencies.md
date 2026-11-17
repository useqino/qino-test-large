---
title: "Markdown Frontmatter at Scale: Advice for Agencies"
created-on: "2022-08-27T20:45:00Z"
updated-on: "2022-08-31T20:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to markdown frontmatter three times last year. Here is what survived.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
