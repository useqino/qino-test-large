---
title: "Common Mistakes in Content Modeling Made by Internal Wikis"
created-on: "2026-01-09T09:15:00Z"
updated-on: "2026-02-01T09:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

content modeling sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
