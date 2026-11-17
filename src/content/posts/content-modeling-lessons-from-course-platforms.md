---
title: "Content Modeling: Lessons from Course Platforms"
created-on: "2025-08-22T15:00:00Z"
updated-on: "2025-09-09T15:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

We rebuilt our approach to content modeling three times last year. Here is what survived.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
