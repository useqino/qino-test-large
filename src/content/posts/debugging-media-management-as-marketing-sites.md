---
title: "Debugging Media Management as Marketing Sites"
created-on: "2022-09-27T10:45:00Z"
updated-on: "2022-10-07T10:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about media management. It grew, because every answer raised two more questions.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
