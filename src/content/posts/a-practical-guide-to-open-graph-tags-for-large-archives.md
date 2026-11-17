---
title: "A Practical Guide to Open Graph Tags for Large Archives"
created-on: "2024-11-18T02:00:00Z"
updated-on: "2024-12-01T02:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

There is a quiet consensus that open graph tags is solved. Spend a week with large archives and that consensus falls apart quickly.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
