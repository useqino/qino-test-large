---
title: "The Hidden Cost of Link Checking for Internal Wikis"
created-on: "2023-10-18T15:15:00Z"
updated-on: "2023-11-09T15:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/tooling.json"
---

If you work with internal wikis, you have probably met link checking in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
