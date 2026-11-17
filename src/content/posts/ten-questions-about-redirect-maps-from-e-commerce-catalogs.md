---
title: "Ten Questions About Redirect Maps from E-commerce Catalogs"
created-on: "2025-05-01T05:15:00Z"
updated-on: "2025-06-03T05:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

Most teams only notice redirect maps once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
