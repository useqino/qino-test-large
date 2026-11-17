---
title: "Notes on Type-Safe Content for Small Teams"
created-on: "2025-02-28T22:30:00Z"
updated-on: "2025-03-17T22:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

Most teams only notice type-safe content once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
