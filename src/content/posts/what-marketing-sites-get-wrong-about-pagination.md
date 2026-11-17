---
title: "What Marketing Sites Get Wrong About Pagination"
created-on: "2020-12-09T01:00:00Z"
updated-on: "2021-01-19T01:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

There is a quiet consensus that pagination is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
