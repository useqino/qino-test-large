---
title: "A Checklist for Content Relations Aimed at Startups"
created-on: "2026-01-18T01:00:00Z"
updated-on: "2026-02-23T01:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/camille-laurent.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about content relations. It grew, because every answer raised two more questions.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
