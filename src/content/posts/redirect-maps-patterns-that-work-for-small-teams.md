---
title: "Redirect Maps Patterns That Work for Small Teams"
created-on: "2026-06-09T21:30:00Z"
updated-on: "2026-06-30T21:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/editorial.json"
---

Most teams only notice redirect maps once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
