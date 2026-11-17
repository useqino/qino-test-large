---
title: "Debugging Markdown Frontmatter as Content Editors"
created-on: "2024-04-14T14:30:00Z"
updated-on: "2024-05-15T14:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/lars-eriksson.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that markdown frontmatter is solved. Spend a week with content editors and that consensus falls apart quickly.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
