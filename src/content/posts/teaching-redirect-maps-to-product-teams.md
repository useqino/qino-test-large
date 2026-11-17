---
title: "Teaching Redirect Maps to Product Teams"
created-on: "2023-09-22T09:30:00Z"
updated-on: "2023-10-05T09:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

redirect maps sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

If you take one thing away, make it this: decide on purpose, and write the decision down.
