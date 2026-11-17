---
title: "Getting Started with MDX Components for Startups"
created-on: "2021-04-13T02:15:00Z"
updated-on: "2021-05-07T02:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about mdx components. It grew, because every answer raised two more questions.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
