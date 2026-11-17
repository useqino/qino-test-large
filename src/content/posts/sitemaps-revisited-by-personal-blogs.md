---
title: "Sitemaps, Revisited by Personal Blogs"
created-on: "2023-06-30T23:15:00Z"
updated-on: "2023-07-31T23:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

sitemaps sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
