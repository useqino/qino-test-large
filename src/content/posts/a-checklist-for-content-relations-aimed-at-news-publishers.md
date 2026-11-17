---
title: "A Checklist for Content Relations Aimed at News Publishers"
created-on: "2026-08-15T04:30:00Z"
updated-on: "2026-09-23T04:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/content-modeling.json"
---

If you work with news publishers, you have probably met content relations in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
