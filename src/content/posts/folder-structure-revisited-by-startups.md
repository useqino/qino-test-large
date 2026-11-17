---
title: "Folder Structure, Revisited by Startups"
created-on: "2022-09-29T04:30:00Z"
updated-on: "2022-10-03T04:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to folder structure three times last year. Here is what survived.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
