---
title: "Getting Started with Git-Based Publishing for Open Source Projects"
created-on: "2021-12-05T10:30:00Z"
updated-on: "2021-12-26T10:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that git-based publishing is solved. Spend a week with open source projects and that consensus falls apart quickly.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
