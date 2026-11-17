---
title: "Schema Validation, Revisited by News Publishers"
created-on: "2020-12-31T14:30:00Z"
updated-on: "2021-02-28T14:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/amara-okonkwo.json"
category: "categories/seo.json"
---

Most teams only notice schema validation once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
