---
title: "Open Graph Tags in Practice: A Field Report from Design Systems"
created-on: "2021-10-31T02:30:00Z"
updated-on: "2021-11-04T02:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

Most teams only notice open graph tags once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
