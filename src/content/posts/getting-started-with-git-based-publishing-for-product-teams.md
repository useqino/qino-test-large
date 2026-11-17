---
title: "Getting Started with Git-Based Publishing for Product Teams"
created-on: "2023-10-28T15:15:00Z"
updated-on: "2023-12-04T15:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/seo.json"
---

git-based publishing sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
