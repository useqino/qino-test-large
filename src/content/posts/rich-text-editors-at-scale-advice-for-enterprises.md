---
title: "Rich Text Editors at Scale: Advice for Enterprises"
created-on: "2021-10-06T00:45:00Z"
updated-on: "2021-11-24T00:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/amara-okonkwo.json"
category: "categories/markdown.json"
---

We rebuilt our approach to rich text editors three times last year. Here is what survived.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
