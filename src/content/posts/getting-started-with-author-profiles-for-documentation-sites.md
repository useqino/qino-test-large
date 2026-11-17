---
title: "Getting Started with Author Profiles for Documentation Sites"
created-on: "2022-02-04T03:00:00Z"
updated-on: "2022-02-04T03:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

There is a quiet consensus that author profiles is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
