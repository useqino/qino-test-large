---
title: "A Second Look at Localization for Documentation Sites"
created-on: "2022-04-24T09:15:00Z"
updated-on: "2022-05-02T09:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

Most teams only notice localization once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
