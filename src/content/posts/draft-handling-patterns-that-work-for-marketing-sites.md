---
title: "Draft Handling Patterns That Work for Marketing Sites"
created-on: "2024-01-05T23:00:00Z"
updated-on: "2024-02-21T23:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

There is a quiet consensus that draft handling is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
