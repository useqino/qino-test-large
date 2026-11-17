---
title: "Folder Structure in Practice: A Field Report from Design Systems"
created-on: "2025-02-09T04:00:00Z"
updated-on: "2025-02-22T04:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

We rebuilt our approach to folder structure three times last year. Here is what survived.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
