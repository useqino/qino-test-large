---
title: "Teaching Incremental Builds to Product Teams"
created-on: "2026-04-25T08:45:00Z"
updated-on: "2026-06-16T08:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
