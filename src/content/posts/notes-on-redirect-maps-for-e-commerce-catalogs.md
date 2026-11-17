---
title: "Notes on Redirect Maps for E-commerce Catalogs"
created-on: "2022-10-08T02:00:00Z"
updated-on: "2022-10-08T02:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

If you work with e-commerce catalogs, you have probably met redirect maps in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
