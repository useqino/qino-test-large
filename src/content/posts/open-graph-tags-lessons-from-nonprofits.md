---
title: "Open Graph Tags: Lessons from Nonprofits"
created-on: "2022-12-06T17:30:00Z"
updated-on: "2022-12-06T17:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

We rebuilt our approach to open graph tags three times last year. Here is what survived.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
