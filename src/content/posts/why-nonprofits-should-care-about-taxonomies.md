---
title: "Why Nonprofits Should Care About Taxonomies"
created-on: "2026-06-16T00:45:00Z"
updated-on: "2026-07-20T00:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/tooling.json"
---

There is a quiet consensus that taxonomies is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
