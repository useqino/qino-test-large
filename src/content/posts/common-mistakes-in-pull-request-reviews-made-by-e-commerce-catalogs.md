---
title: "Common Mistakes in Pull Request Reviews Made by E-commerce Catalogs"
created-on: "2021-03-09T01:15:00Z"
updated-on: "2021-04-17T01:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

Most teams only notice pull request reviews once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
