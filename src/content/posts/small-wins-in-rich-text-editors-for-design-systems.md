---
title: "Small Wins in Rich Text Editors for Design Systems"
created-on: "2021-12-10T00:00:00Z"
updated-on: "2022-01-03T00:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

rich text editors sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
