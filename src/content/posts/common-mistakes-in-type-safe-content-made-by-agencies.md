---
title: "Common Mistakes in Type-Safe Content Made by Agencies"
created-on: "2022-06-23T13:15:00Z"
updated-on: "2022-07-23T13:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

Most teams only notice type-safe content once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
