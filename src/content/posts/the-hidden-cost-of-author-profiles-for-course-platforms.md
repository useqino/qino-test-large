---
title: "The Hidden Cost of Author Profiles for Course Platforms"
created-on: "2021-12-16T14:00:00Z"
updated-on: "2022-01-13T14:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about author profiles. It grew, because every answer raised two more questions.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
