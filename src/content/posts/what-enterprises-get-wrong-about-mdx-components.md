---
title: "What Enterprises Get Wrong About MDX Components"
created-on: "2024-09-12T14:00:00Z"
updated-on: "2024-10-05T14:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/lars-eriksson.json"
category: "categories/content-modeling.json"
---

Most teams only notice mdx components once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
