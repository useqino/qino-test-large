---
title: "Ten Questions About Headless CMSes from Design Systems"
created-on: "2023-09-12T00:15:00Z"
updated-on: "2023-11-06T00:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

We rebuilt our approach to headless cmses three times last year. Here is what survived.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
