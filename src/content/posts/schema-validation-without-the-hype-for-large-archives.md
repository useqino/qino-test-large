---
title: "Schema Validation Without the Hype, for Large Archives"
created-on: "2021-10-06T23:45:00Z"
updated-on: "2021-10-21T23:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

schema validation sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
