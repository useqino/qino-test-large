---
title: "The Hidden Cost of Editorial Workflows for Design Systems"
created-on: "2025-10-16T13:30:00Z"
updated-on: "2025-12-14T13:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/priya-krishnan.json"
category: "categories/tooling.json"
---

There is a quiet consensus that editorial workflows is solved. Spend a week with design systems and that consensus falls apart quickly.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
