---
title: "Rethinking Structured Data for Open Source Projects"
created-on: "2023-12-25T09:15:00Z"
updated-on: "2024-01-10T09:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

Most teams only notice structured data once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
