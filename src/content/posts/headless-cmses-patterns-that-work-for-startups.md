---
title: "Headless CMSes Patterns That Work for Startups"
created-on: "2022-11-13T05:30:00Z"
updated-on: "2022-12-27T05:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

If you work with startups, you have probably met headless cmses in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

If you take one thing away, make it this: decide on purpose, and write the decision down.
