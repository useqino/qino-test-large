---
title: "Hot Reloading for Podcast Sites"
created-on: "2023-02-20T00:00:00Z"
updated-on: "2023-03-06T00:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

Most teams only notice hot reloading once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
