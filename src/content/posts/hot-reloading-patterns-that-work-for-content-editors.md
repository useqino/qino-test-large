---
title: "Hot Reloading Patterns That Work for Content Editors"
created-on: "2023-01-13T17:15:00Z"
updated-on: "2023-01-21T17:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/amara-okonkwo.json"
category: "categories/type-safety.json"
---

If you work with content editors, you have probably met hot reloading in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
