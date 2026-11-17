---
title: "Common Mistakes in Folder Structure Made by Personal Blogs"
created-on: "2026-01-07T00:00:00Z"
updated-on: "2026-02-07T00:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

There is a quiet consensus that folder structure is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
