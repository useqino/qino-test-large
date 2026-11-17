---
title: "Measuring Folder Structure as Large Archives"
created-on: "2022-10-12T14:30:00Z"
updated-on: "2022-10-16T14:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

If you work with large archives, you have probably met folder structure in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
