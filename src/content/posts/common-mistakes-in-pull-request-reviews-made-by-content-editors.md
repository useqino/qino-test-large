---
title: "Common Mistakes in Pull Request Reviews Made by Content Editors"
created-on: "2026-03-27T14:30:00Z"
updated-on: "2026-04-18T14:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

If you work with content editors, you have probably met pull request reviews in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
