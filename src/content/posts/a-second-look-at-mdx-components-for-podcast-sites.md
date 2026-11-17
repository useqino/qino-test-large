---
title: "A Second Look at MDX Components for Podcast Sites"
created-on: "2026-07-31T02:00:00Z"
updated-on: "2026-08-17T02:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about mdx components. It grew, because every answer raised two more questions.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
