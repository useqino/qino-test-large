---
title: "A Checklist for Folder Structure Aimed at News Publishers"
created-on: "2021-09-25T18:45:00Z"
updated-on: "2021-11-18T18:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

We rebuilt our approach to folder structure three times last year. Here is what survived.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
