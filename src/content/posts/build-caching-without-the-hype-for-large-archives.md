---
title: "Build Caching Without the Hype, for Large Archives"
created-on: "2023-08-15T01:15:00Z"
updated-on: "2023-08-20T01:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

There is a quiet consensus that build caching is solved. Spend a week with large archives and that consensus falls apart quickly.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
