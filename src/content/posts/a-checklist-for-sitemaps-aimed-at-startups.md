---
title: "A Checklist for Sitemaps Aimed at Startups"
created-on: "2023-01-12T13:45:00Z"
updated-on: "2023-02-24T13:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

There is a quiet consensus that sitemaps is solved. Spend a week with startups and that consensus falls apart quickly.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
