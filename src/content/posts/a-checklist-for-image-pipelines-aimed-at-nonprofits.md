---
title: "A Checklist for Image Pipelines Aimed at Nonprofits"
created-on: "2024-06-16T04:30:00Z"
updated-on: "2024-07-09T04:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

We rebuilt our approach to image pipelines three times last year. Here is what survived.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
