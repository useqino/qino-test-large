---
title: "MDX Components Without the Hype, for Marketing Sites"
created-on: "2025-12-11T20:45:00Z"
updated-on: "2026-02-01T20:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

There is a quiet consensus that mdx components is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
