---
title: "Link Checking at Scale: Advice for Open Source Projects"
created-on: "2025-09-13T15:45:00Z"
updated-on: "2025-11-11T15:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

Most teams only notice link checking once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
