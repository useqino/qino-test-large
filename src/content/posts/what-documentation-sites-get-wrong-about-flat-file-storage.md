---
title: "What Documentation Sites Get Wrong About Flat-File Storage"
created-on: "2020-11-21T11:30:00Z"
updated-on: "2020-12-06T11:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to flat-file storage three times last year. Here is what survived.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
