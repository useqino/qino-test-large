---
title: "Content Modeling at Scale: Advice for Marketing Sites"
created-on: "2025-09-11T11:15:00Z"
updated-on: "2025-11-08T11:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

content modeling sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
