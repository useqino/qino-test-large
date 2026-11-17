---
title: "Content Modeling, Revisited by News Publishers"
created-on: "2025-08-02T03:45:00Z"
updated-on: "2025-08-08T03:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

If you work with news publishers, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
