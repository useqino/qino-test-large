---
title: "The Hidden Cost of Rich Text Editors for Small Teams"
created-on: "2021-06-25T12:45:00Z"
updated-on: "2021-06-30T12:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

rich text editors sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
