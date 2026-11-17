---
title: "Redirect Maps: Lessons from Large Archives"
created-on: "2022-04-14T10:30:00Z"
updated-on: "2022-05-23T10:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

If you work with large archives, you have probably met redirect maps in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
