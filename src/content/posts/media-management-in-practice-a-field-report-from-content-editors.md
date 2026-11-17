---
title: "Media Management in Practice: A Field Report from Content Editors"
created-on: "2023-05-10T20:30:00Z"
updated-on: "2023-06-19T20:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

media management sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```bash
pnpm qino build
pnpm next build
```

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
