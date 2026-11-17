---
title: "A Checklist for Build Caching Aimed at Startups"
created-on: "2023-10-03T20:45:00Z"
updated-on: "2023-10-31T20:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/seo.json"
---

If you work with startups, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
