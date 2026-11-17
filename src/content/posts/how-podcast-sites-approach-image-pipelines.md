---
title: "How Podcast Sites Approach Image Pipelines"
created-on: "2023-12-25T23:45:00Z"
updated-on: "2024-01-21T23:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/philosophy.json"
---

If you work with podcast sites, you have probably met image pipelines in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
