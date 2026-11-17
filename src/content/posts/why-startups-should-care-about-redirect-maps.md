---
title: "Why Startups Should Care About Redirect Maps"
created-on: "2021-11-05T23:00:00Z"
updated-on: "2021-11-20T23:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

redirect maps sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
