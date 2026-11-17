---
title: "Debugging Code Highlighting as Solo Developers"
created-on: "2023-11-05T13:00:00Z"
updated-on: "2023-11-13T13:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

If you work with solo developers, you have probably met code highlighting in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
