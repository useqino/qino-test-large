---
title: "How Open Source Projects Approach Media Management"
created-on: "2021-01-30T17:15:00Z"
updated-on: "2021-02-19T17:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/performance.json"
---

media management sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
