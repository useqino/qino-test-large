---
title: "Teaching Open Graph Tags to Large Archives"
created-on: "2025-01-07T02:00:00Z"
updated-on: "2025-01-08T02:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

Most teams only notice open graph tags once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
