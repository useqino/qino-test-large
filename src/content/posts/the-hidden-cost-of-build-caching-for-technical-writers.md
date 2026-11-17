---
title: "The Hidden Cost of Build Caching for Technical Writers"
created-on: "2022-02-20T12:45:00Z"
updated-on: "2022-02-26T12:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to build caching three times last year. Here is what survived.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
