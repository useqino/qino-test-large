---
title: "Git-Based Publishing in Practice: A Field Report from Product Teams"
created-on: "2024-06-24T22:00:00Z"
updated-on: "2024-08-03T22:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about git-based publishing. It grew, because every answer raised two more questions.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
