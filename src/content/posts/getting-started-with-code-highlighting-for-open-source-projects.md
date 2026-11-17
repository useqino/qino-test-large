---
title: "Getting Started with Code Highlighting for Open Source Projects"
created-on: "2023-05-13T20:15:00Z"
updated-on: "2023-05-29T20:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about code highlighting. It grew, because every answer raised two more questions.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
