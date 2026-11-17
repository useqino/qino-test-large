---
title: "Common Mistakes in Static Site Builds Made by Design Systems"
created-on: "2023-02-28T18:15:00Z"
updated-on: "2023-04-11T18:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

There is a quiet consensus that static site builds is solved. Spend a week with design systems and that consensus falls apart quickly.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```bash
pnpm qino build
pnpm next build
```

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
