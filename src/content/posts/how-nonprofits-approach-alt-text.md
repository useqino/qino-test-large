---
title: "How Nonprofits Approach Alt Text"
created-on: "2023-09-19T12:00:00Z"
updated-on: "2023-10-11T12:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to alt text three times last year. Here is what survived.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
