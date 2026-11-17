---
title: "Ten Questions About Rich Text Editors from Marketing Sites"
created-on: "2026-08-28T00:30:00Z"
updated-on: "2026-10-12T00:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

We rebuilt our approach to rich text editors three times last year. Here is what survived.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
