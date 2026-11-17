---
title: "A Second Look at Flat-File Storage for Technical Writers"
created-on: "2023-03-23T13:00:00Z"
updated-on: "2023-04-21T13:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/editorial.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
