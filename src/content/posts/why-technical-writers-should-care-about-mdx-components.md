---
title: "Why Technical Writers Should Care About MDX Components"
created-on: "2026-06-28T06:45:00Z"
updated-on: "2026-08-19T06:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about mdx components. It grew, because every answer raised two more questions.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
