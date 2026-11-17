---
title: "Folder Structure Patterns That Work for Content Editors"
created-on: "2024-12-06T21:15:00Z"
updated-on: "2024-12-15T21:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
