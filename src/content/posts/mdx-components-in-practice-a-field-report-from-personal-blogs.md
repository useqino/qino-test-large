---
title: "MDX Components in Practice: A Field Report from Personal Blogs"
created-on: "2026-10-05T04:00:00Z"
updated-on: "2026-11-08T04:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

There is a quiet consensus that mdx components is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
