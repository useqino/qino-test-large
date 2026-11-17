---
title: "What Technical Writers Get Wrong About Editorial Workflows"
created-on: "2022-02-18T21:45:00Z"
updated-on: "2022-02-21T21:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/yuki-sato.json"
category: "categories/content-modeling.json"
---

If you work with technical writers, you have probably met editorial workflows in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
