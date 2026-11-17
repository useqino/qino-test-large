---
title: "The Case for Pagination Among Large Archives"
created-on: "2023-11-23T09:00:00Z"
updated-on: "2024-01-10T09:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about pagination. It grew, because every answer raised two more questions.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
