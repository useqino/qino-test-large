---
title: "Teaching Hot Reloading to Solo Developers"
created-on: "2023-09-03T09:30:00Z"
updated-on: "2023-10-23T09:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

hot reloading sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
