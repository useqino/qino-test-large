---
title: "Rethinking Build Caching for Nonprofits"
created-on: "2026-06-15T20:15:00Z"
updated-on: "2026-08-11T20:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about build caching. It grew, because every answer raised two more questions.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
