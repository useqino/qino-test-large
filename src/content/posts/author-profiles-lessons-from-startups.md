---
title: "Author Profiles: Lessons from Startups"
created-on: "2022-02-18T04:15:00Z"
updated-on: "2022-03-10T04:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

We rebuilt our approach to author profiles three times last year. Here is what survived.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
