---
title: "Teaching Incremental Builds to Documentation Sites"
created-on: "2026-08-01T12:45:00Z"
updated-on: "2026-08-29T12:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/seo.json"
---

There is a quiet consensus that incremental builds is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
