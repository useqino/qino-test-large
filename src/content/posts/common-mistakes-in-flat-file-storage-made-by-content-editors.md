---
title: "Common Mistakes in Flat-File Storage Made by Content Editors"
created-on: "2023-12-17T10:15:00Z"
updated-on: "2024-01-03T10:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
