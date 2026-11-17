---
title: "Measuring Incremental Builds as Nonprofits"
created-on: "2023-01-01T14:30:00Z"
updated-on: "2023-02-11T14:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/diego-moreno.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about incremental builds. It grew, because every answer raised two more questions.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
