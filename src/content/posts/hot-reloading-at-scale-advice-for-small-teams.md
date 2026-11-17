---
title: "Hot Reloading at Scale: Advice for Small Teams"
created-on: "2024-08-15T18:00:00Z"
updated-on: "2024-10-08T18:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/amara-okonkwo.json"
category: "categories/tooling.json"
---

If you work with small teams, you have probably met hot reloading in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
