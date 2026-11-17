---
title: "Hot Reloading for Course Platforms"
created-on: "2023-07-12T07:15:00Z"
updated-on: "2023-08-05T07:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

Most teams only notice hot reloading once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
