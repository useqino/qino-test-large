---
title: "Debugging Open Graph Tags as Open Source Projects"
created-on: "2022-12-30T15:45:00Z"
updated-on: "2023-01-15T15:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that open graph tags is solved. Spend a week with open source projects and that consensus falls apart quickly.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
