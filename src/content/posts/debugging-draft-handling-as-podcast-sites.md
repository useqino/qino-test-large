---
title: "Debugging Draft Handling as Podcast Sites"
created-on: "2025-11-26T11:30:00Z"
updated-on: "2025-12-13T11:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

There is a quiet consensus that draft handling is solved. Spend a week with podcast sites and that consensus falls apart quickly.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
