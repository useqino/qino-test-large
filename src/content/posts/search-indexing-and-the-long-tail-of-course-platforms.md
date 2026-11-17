---
title: "Search Indexing and the Long Tail of Course Platforms"
created-on: "2025-03-27T07:00:00Z"
updated-on: "2025-04-21T07:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about search indexing. It grew, because every answer raised two more questions.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
