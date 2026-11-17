---
title: "Why Design Systems Should Care About Pagination"
created-on: "2021-01-20T16:00:00Z"
updated-on: "2021-02-25T16:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

We rebuilt our approach to pagination three times last year. Here is what survived.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
