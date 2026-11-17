---
title: "What Open Source Projects Get Wrong About Link Checking"
created-on: "2025-03-19T23:30:00Z"
updated-on: "2025-03-31T23:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

link checking sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
