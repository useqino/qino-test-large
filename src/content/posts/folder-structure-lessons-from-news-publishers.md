---
title: "Folder Structure: Lessons from News Publishers"
created-on: "2024-10-30T17:00:00Z"
updated-on: "2024-11-02T17:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
