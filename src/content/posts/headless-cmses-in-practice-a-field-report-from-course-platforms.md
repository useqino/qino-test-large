---
title: "Headless CMSes in Practice: A Field Report from Course Platforms"
created-on: "2024-04-25T16:30:00Z"
updated-on: "2024-05-06T16:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about headless cmses. It grew, because every answer raised two more questions.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
