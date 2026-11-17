---
title: "Search Indexing in Practice: A Field Report from Product Teams"
created-on: "2024-06-14T06:45:00Z"
updated-on: "2024-06-17T06:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with product teams and that consensus falls apart quickly.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
