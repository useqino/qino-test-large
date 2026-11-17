---
title: "Notes on Rich Text Editors for Personal Blogs"
created-on: "2026-07-05T17:00:00Z"
updated-on: "2026-07-29T17:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/editorial.json"
---

There is a quiet consensus that rich text editors is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
