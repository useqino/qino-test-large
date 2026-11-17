---
title: "Getting Started with Content Linting for Product Teams"
created-on: "2021-06-28T12:15:00Z"
updated-on: "2021-08-19T12:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

If you work with product teams, you have probably met content linting in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
