---
title: "Ten Questions About Hot Reloading from Design Systems"
created-on: "2024-05-23T17:45:00Z"
updated-on: "2024-07-21T17:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

There is a quiet consensus that hot reloading is solved. Spend a week with design systems and that consensus falls apart quickly.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
