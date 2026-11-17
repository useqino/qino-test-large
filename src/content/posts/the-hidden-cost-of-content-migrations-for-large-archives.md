---
title: "The Hidden Cost of Content Migrations for Large Archives"
created-on: "2024-02-01T08:15:00Z"
updated-on: "2024-02-29T08:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about content migrations. It grew, because every answer raised two more questions.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
