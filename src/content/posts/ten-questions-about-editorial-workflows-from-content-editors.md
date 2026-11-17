---
title: "Ten Questions About Editorial Workflows from Content Editors"
created-on: "2022-11-01T23:45:00Z"
updated-on: "2022-12-21T23:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/markdown.json"
---

editorial workflows sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
