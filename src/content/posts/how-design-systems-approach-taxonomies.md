---
title: "How Design Systems Approach Taxonomies"
created-on: "2021-01-04T14:30:00Z"
updated-on: "2021-02-10T14:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/seo.json"
---

There is a quiet consensus that taxonomies is solved. Spend a week with design systems and that consensus falls apart quickly.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
