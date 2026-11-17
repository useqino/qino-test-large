---
title: "A Practical Guide to Slug Design for Product Teams"
created-on: "2021-02-26T02:15:00Z"
updated-on: "2021-03-22T02:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

If you work with product teams, you have probably met slug design in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
