---
title: "Why Open Source Projects Should Care About Content Relations"
created-on: "2022-08-26T09:45:00Z"
updated-on: "2022-09-10T09:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that content relations is solved. Spend a week with open source projects and that consensus falls apart quickly.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
