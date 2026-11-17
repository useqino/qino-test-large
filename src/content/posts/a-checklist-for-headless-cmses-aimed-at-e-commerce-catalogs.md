---
title: "A Checklist for Headless CMSes Aimed at E-commerce Catalogs"
created-on: "2022-10-13T22:45:00Z"
updated-on: "2022-12-04T22:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about headless cmses. It grew, because every answer raised two more questions.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
