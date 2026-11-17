---
title: "Link Checking in Practice: A Field Report from Content Editors"
created-on: "2022-12-14T15:30:00Z"
updated-on: "2023-02-03T15:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/raj-patel.json"
category: "categories/seo.json"
---

There is a quiet consensus that link checking is solved. Spend a week with content editors and that consensus falls apart quickly.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
