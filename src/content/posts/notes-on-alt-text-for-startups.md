---
title: "Notes on Alt Text for Startups"
created-on: "2023-08-31T06:45:00Z"
updated-on: "2023-10-23T06:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/editorial.json"
---

alt text sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
