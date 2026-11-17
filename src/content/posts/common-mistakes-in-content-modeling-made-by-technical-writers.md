---
title: "Common Mistakes in Content Modeling Made by Technical Writers"
created-on: "2021-12-17T15:00:00Z"
updated-on: "2022-02-07T15:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

We rebuilt our approach to content modeling three times last year. Here is what survived.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
