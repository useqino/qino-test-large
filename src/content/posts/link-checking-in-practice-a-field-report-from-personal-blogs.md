---
title: "Link Checking in Practice: A Field Report from Personal Blogs"
created-on: "2020-12-26T03:30:00Z"
updated-on: "2021-01-28T03:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that link checking is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
