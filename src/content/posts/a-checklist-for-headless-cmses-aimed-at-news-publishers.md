---
title: "A Checklist for Headless CMSes Aimed at News Publishers"
created-on: "2021-04-11T13:15:00Z"
updated-on: "2021-06-02T13:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/editorial.json"
---

headless cmses sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
