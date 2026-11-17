---
title: "How Podcast Sites Approach Link Checking"
created-on: "2024-10-19T09:45:00Z"
updated-on: "2024-11-25T09:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

There is a quiet consensus that link checking is solved. Spend a week with podcast sites and that consensus falls apart quickly.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
