---
title: "A Checklist for Taxonomies Aimed at Content Editors"
created-on: "2024-12-05T05:45:00Z"
updated-on: "2025-01-21T05:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about taxonomies. It grew, because every answer raised two more questions.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
