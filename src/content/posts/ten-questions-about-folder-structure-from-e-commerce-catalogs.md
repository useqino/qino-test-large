---
title: "Ten Questions About Folder Structure from E-commerce Catalogs"
created-on: "2024-08-09T15:00:00Z"
updated-on: "2024-08-28T15:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/amara-okonkwo.json"
category: "categories/markdown.json"
---

There is a quiet consensus that folder structure is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
