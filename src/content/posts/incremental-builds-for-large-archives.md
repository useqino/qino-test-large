---
title: "Incremental Builds for Large Archives"
created-on: "2025-02-21T08:45:00Z"
updated-on: "2025-03-23T08:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

If you work with large archives, you have probably met incremental builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
