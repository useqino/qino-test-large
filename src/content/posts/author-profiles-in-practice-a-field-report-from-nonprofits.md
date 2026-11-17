---
title: "Author Profiles in Practice: A Field Report from Nonprofits"
created-on: "2024-03-30T23:30:00Z"
updated-on: "2024-04-19T23:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

There is a quiet consensus that author profiles is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
