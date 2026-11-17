---
title: "A Second Look at Media Management for Internal Wikis"
created-on: "2021-10-21T20:00:00Z"
updated-on: "2021-11-11T20:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

We rebuilt our approach to media management three times last year. Here is what survived.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```bash
pnpm qino build
pnpm next build
```

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
