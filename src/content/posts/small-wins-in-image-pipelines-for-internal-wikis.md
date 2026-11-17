---
title: "Small Wins in Image Pipelines for Internal Wikis"
created-on: "2025-07-03T10:00:00Z"
updated-on: "2025-08-27T10:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to image pipelines three times last year. Here is what survived.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
