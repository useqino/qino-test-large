---
title: "Rich Text Editors at Scale: Advice for Technical Writers"
created-on: "2021-01-09T19:45:00Z"
updated-on: "2021-02-26T19:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

We rebuilt our approach to rich text editors three times last year. Here is what survived.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
