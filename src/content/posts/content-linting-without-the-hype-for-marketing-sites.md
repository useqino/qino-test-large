---
title: "Content Linting Without the Hype, for Marketing Sites"
created-on: "2026-03-02T20:30:00Z"
updated-on: "2026-04-02T20:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

content linting sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
