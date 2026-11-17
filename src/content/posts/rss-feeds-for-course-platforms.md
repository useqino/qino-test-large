---
title: "RSS Feeds for Course Platforms"
created-on: "2021-05-07T18:15:00Z"
updated-on: "2021-06-09T18:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

There is a quiet consensus that rss feeds is solved. Spend a week with course platforms and that consensus falls apart quickly.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
