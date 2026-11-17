---
title: "What E-commerce Catalogs Get Wrong About Markdown Frontmatter"
created-on: "2025-03-21T09:15:00Z"
updated-on: "2025-05-12T09:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

There is a quiet consensus that markdown frontmatter is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
