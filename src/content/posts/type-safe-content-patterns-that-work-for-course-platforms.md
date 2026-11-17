---
title: "Type-Safe Content Patterns That Work for Course Platforms"
created-on: "2025-08-10T18:00:00Z"
updated-on: "2025-09-15T18:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about type-safe content. It grew, because every answer raised two more questions.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
