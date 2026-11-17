---
title: "A Checklist for Markdown Frontmatter Aimed at Marketing Sites"
created-on: "2025-09-20T23:00:00Z"
updated-on: "2025-09-26T23:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

markdown frontmatter sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```bash
pnpm qino build
pnpm next build
```

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
