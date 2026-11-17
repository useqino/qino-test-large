---
title: "Measuring Static Site Builds as Design Systems"
created-on: "2021-10-19T00:45:00Z"
updated-on: "2021-11-03T00:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

If you work with design systems, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
