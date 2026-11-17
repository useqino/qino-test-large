---
title: "What Technical Writers Get Wrong About Folder Structure"
created-on: "2026-06-13T00:45:00Z"
updated-on: "2026-06-22T00:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
