---
title: "Small Wins in Content Migrations for News Publishers"
created-on: "2024-05-25T22:15:00Z"
updated-on: "2024-07-23T22:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

content migrations sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
