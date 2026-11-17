---
title: "Content Audits for Nonprofits"
created-on: "2021-05-20T18:00:00Z"
updated-on: "2021-06-16T18:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

We rebuilt our approach to content audits three times last year. Here is what survived.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
