---
title: "Teaching Markdown Frontmatter to Solo Developers"
created-on: "2021-08-29T18:00:00Z"
updated-on: "2021-10-25T18:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

Most teams only notice markdown frontmatter once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
