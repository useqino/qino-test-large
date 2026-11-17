---
title: "Why Internal Wikis Should Care About Image Pipelines"
created-on: "2022-01-16T04:00:00Z"
updated-on: "2022-02-15T04:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

image pipelines sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
