---
title: "A Second Look at Flat-File Storage for Agencies"
created-on: "2024-09-02T10:30:00Z"
updated-on: "2024-10-01T10:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about flat-file storage. It grew, because every answer raised two more questions.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
