---
title: "Measuring Incremental Builds as Personal Blogs"
created-on: "2024-11-23T17:30:00Z"
updated-on: "2024-12-06T17:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/camille-laurent.json"
category: "categories/editorial.json"
---

If you work with personal blogs, you have probably met incremental builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
