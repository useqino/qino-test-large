---
title: "Teaching Author Profiles to Content Editors"
created-on: "2025-07-02T13:45:00Z"
updated-on: "2025-07-28T13:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

If you work with content editors, you have probably met author profiles in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

If you take one thing away, make it this: decide on purpose, and write the decision down.
