---
title: "Taxonomies in Practice: A Field Report from Agencies"
created-on: "2025-01-23T07:15:00Z"
updated-on: "2025-03-07T07:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

If you work with agencies, you have probably met taxonomies in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
