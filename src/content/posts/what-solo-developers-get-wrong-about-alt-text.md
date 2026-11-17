---
title: "What Solo Developers Get Wrong About Alt Text"
created-on: "2021-11-23T14:30:00Z"
updated-on: "2021-11-30T14:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/seo.json"
---

Most teams only notice alt text once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
