---
title: "A Practical Guide to Build Caching for News Publishers"
created-on: "2023-04-23T23:45:00Z"
updated-on: "2023-05-27T23:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

build caching sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
