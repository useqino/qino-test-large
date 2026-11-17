---
title: "Notes on Open Graph Tags for Small Teams"
created-on: "2021-02-22T20:30:00Z"
updated-on: "2021-03-21T20:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

open graph tags sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
