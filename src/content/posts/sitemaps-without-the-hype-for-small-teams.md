---
title: "Sitemaps Without the Hype, for Small Teams"
created-on: "2021-10-23T01:30:00Z"
updated-on: "2021-12-06T01:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/content-modeling.json"
---

sitemaps sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
