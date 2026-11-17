---
title: "Ten Questions About Image Pipelines from Marketing Sites"
created-on: "2021-02-09T16:15:00Z"
updated-on: "2021-03-04T16:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

image pipelines sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
