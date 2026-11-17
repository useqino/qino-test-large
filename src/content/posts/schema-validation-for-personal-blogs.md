---
title: "Schema Validation for Personal Blogs"
created-on: "2022-05-01T19:00:00Z"
updated-on: "2022-06-22T19:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/tooling.json"
---

We rebuilt our approach to schema validation three times last year. Here is what survived.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
