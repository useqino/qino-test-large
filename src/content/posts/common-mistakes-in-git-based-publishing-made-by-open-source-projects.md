---
title: "Common Mistakes in Git-Based Publishing Made by Open Source Projects"
created-on: "2026-10-16T00:00:00Z"
updated-on: "2026-12-08T00:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about git-based publishing. It grew, because every answer raised two more questions.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
