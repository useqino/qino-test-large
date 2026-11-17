---
title: "A Checklist for MDX Components Aimed at Solo Developers"
created-on: "2020-12-03T18:15:00Z"
updated-on: "2020-12-28T18:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/philosophy.json"
---

Most teams only notice mdx components once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
