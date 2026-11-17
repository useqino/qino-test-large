---
title: "Measuring Static Site Builds as Small Teams"
created-on: "2024-04-19T20:45:00Z"
updated-on: "2024-04-21T20:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/seo.json"
---

If you work with small teams, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```bash
pnpm qino build
pnpm next build
```

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

If you take one thing away, make it this: decide on purpose, and write the decision down.
