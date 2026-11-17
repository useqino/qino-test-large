---
title: "Notes on Taxonomies for Content Editors"
created-on: "2024-12-22T09:45:00Z"
updated-on: "2025-01-31T09:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to taxonomies three times last year. Here is what survived.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
