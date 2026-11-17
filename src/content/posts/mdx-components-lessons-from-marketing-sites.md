---
title: "MDX Components: Lessons from Marketing Sites"
created-on: "2026-04-16T13:15:00Z"
updated-on: "2026-05-02T13:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about mdx components. It grew, because every answer raised two more questions.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
