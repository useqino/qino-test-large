---
title: "Rich Text Editors Without the Hype, for Technical Writers"
created-on: "2022-04-03T11:30:00Z"
updated-on: "2022-04-11T11:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/priya-krishnan.json"
category: "categories/architecture.json"
---

Most teams only notice rich text editors once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
