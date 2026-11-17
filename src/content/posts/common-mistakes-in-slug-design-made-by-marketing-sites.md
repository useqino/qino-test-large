---
title: "Common Mistakes in Slug Design Made by Marketing Sites"
created-on: "2022-02-25T00:45:00Z"
updated-on: "2022-04-15T00:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/content-modeling.json"
---

Most teams only notice slug design once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
