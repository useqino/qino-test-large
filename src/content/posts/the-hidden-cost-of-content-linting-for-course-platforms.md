---
title: "The Hidden Cost of Content Linting for Course Platforms"
created-on: "2026-10-11T10:45:00Z"
updated-on: "2026-10-20T10:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/amara-okonkwo.json"
category: "categories/editorial.json"
---

content linting sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
