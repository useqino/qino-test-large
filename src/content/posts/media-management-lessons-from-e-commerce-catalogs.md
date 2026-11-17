---
title: "Media Management: Lessons from E-commerce Catalogs"
created-on: "2026-05-04T21:00:00Z"
updated-on: "2026-05-05T21:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

If you work with e-commerce catalogs, you have probably met media management in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
