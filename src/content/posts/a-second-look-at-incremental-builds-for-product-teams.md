---
title: "A Second Look at Incremental Builds for Product Teams"
created-on: "2023-05-26T05:00:00Z"
updated-on: "2023-06-23T05:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

Most teams only notice incremental builds once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
