---
title: "Teaching Author Profiles to Small Teams"
created-on: "2025-08-05T13:45:00Z"
updated-on: "2025-08-06T13:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

If you work with small teams, you have probably met author profiles in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
