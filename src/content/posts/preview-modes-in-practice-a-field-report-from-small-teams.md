---
title: "Preview Modes in Practice: A Field Report from Small Teams"
created-on: "2021-02-26T21:30:00Z"
updated-on: "2021-03-22T21:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that preview modes is solved. Spend a week with small teams and that consensus falls apart quickly.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
