---
title: "Editorial Workflows: Lessons from Content Editors"
created-on: "2021-08-04T21:45:00Z"
updated-on: "2021-09-28T21:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about editorial workflows. It grew, because every answer raised two more questions.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
