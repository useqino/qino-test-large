---
title: "MDX Components and the Long Tail of Solo Developers"
created-on: "2021-03-24T06:45:00Z"
updated-on: "2021-04-26T06:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

We rebuilt our approach to mdx components three times last year. Here is what survived.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
