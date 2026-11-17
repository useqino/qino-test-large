---
title: "Common Mistakes in Alt Text Made by E-commerce Catalogs"
created-on: "2024-06-27T11:15:00Z"
updated-on: "2024-06-27T11:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

Most teams only notice alt text once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
