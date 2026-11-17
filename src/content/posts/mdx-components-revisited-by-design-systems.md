---
title: "MDX Components, Revisited by Design Systems"
created-on: "2021-01-27T02:45:00Z"
updated-on: "2021-03-13T02:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

mdx components sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
