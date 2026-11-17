---
title: "Preview Modes, Revisited by Solo Developers"
created-on: "2020-11-10T21:00:00Z"
updated-on: "2020-11-24T21:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

There is a quiet consensus that preview modes is solved. Spend a week with solo developers and that consensus falls apart quickly.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
