---
title: "Small Wins in Image Pipelines for News Publishers"
created-on: "2025-12-25T18:45:00Z"
updated-on: "2026-01-02T18:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about image pipelines. It grew, because every answer raised two more questions.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
