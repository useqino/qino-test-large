---
title: "The Hidden Cost of Link Checking for Solo Developers"
created-on: "2023-03-02T21:45:00Z"
updated-on: "2023-04-23T21:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/lars-eriksson.json"
category: "categories/markdown.json"
---

If you work with solo developers, you have probably met link checking in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
