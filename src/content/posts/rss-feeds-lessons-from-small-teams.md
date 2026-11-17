---
title: "RSS Feeds: Lessons from Small Teams"
created-on: "2024-07-08T07:15:00Z"
updated-on: "2024-07-21T07:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/editorial.json"
---

There is a quiet consensus that rss feeds is solved. Spend a week with small teams and that consensus falls apart quickly.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
