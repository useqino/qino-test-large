---
title: "Image Pipelines for Open Source Projects"
created-on: "2021-04-12T18:30:00Z"
updated-on: "2021-05-01T18:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about image pipelines. It grew, because every answer raised two more questions.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
