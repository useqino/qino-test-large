---
title: "Notes on Taxonomies for Enterprises"
created-on: "2021-08-04T17:30:00Z"
updated-on: "2021-08-05T17:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about taxonomies. It grew, because every answer raised two more questions.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
