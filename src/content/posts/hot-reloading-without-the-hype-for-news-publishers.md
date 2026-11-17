---
title: "Hot Reloading Without the Hype, for News Publishers"
created-on: "2022-05-24T00:30:00Z"
updated-on: "2022-06-18T00:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

If you work with news publishers, you have probably met hot reloading in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```bash
pnpm qino build
pnpm next build
```

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
