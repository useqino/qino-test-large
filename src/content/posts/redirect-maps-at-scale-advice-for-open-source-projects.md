---
title: "Redirect Maps at Scale: Advice for Open Source Projects"
created-on: "2025-06-12T21:45:00Z"
updated-on: "2025-07-21T21:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

There is a quiet consensus that redirect maps is solved. Spend a week with open source projects and that consensus falls apart quickly.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
