---
title: "Preview Modes in Practice: A Field Report from Content Editors"
created-on: "2025-01-21T18:00:00Z"
updated-on: "2025-02-10T18:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

preview modes sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
