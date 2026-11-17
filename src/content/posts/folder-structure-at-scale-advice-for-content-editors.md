---
title: "Folder Structure at Scale: Advice for Content Editors"
created-on: "2023-09-30T21:15:00Z"
updated-on: "2023-10-09T21:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

We rebuilt our approach to folder structure three times last year. Here is what survived.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
