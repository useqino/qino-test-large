---
title: "Ten Questions About Link Checking from Personal Blogs"
created-on: "2022-08-26T11:30:00Z"
updated-on: "2022-09-14T11:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

link checking sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
