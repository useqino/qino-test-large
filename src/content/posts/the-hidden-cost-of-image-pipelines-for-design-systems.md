---
title: "The Hidden Cost of Image Pipelines for Design Systems"
created-on: "2024-09-17T06:00:00Z"
updated-on: "2024-10-14T06:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that image pipelines is solved. Spend a week with design systems and that consensus falls apart quickly.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
