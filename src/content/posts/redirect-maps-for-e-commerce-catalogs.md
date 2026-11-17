---
title: "Redirect Maps for E-commerce Catalogs"
created-on: "2023-11-07T00:30:00Z"
updated-on: "2023-11-15T00:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

If you work with e-commerce catalogs, you have probably met redirect maps in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
