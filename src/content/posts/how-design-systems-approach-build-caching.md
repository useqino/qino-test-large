---
title: "How Design Systems Approach Build Caching"
created-on: "2022-06-10T00:45:00Z"
updated-on: "2022-06-14T00:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/migration.json"
---

Most teams only notice build caching once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
