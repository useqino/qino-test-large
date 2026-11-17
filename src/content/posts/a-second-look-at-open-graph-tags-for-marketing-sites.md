---
title: "A Second Look at Open Graph Tags for Marketing Sites"
created-on: "2026-05-28T07:45:00Z"
updated-on: "2026-07-10T07:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

We rebuilt our approach to open graph tags three times last year. Here is what survived.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
