---
title: "Headless CMSes Patterns That Work for Product Teams"
created-on: "2026-08-13T13:30:00Z"
updated-on: "2026-09-26T13:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

headless cmses sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
