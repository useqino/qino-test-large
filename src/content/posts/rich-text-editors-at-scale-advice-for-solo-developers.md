---
title: "Rich Text Editors at Scale: Advice for Solo Developers"
created-on: "2022-08-18T11:00:00Z"
updated-on: "2022-08-27T11:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/seo.json"
---

We rebuilt our approach to rich text editors three times last year. Here is what survived.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
