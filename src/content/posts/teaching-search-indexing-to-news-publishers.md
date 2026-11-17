---
title: "Teaching Search Indexing to News Publishers"
created-on: "2022-10-12T06:45:00Z"
updated-on: "2022-10-22T06:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with news publishers and that consensus falls apart quickly.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
