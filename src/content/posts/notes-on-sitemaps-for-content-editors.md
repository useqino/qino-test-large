---
title: "Notes on Sitemaps for Content Editors"
created-on: "2026-10-18T16:30:00Z"
updated-on: "2026-10-26T16:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

There is a quiet consensus that sitemaps is solved. Spend a week with content editors and that consensus falls apart quickly.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
