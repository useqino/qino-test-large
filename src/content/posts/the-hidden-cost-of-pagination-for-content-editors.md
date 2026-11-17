---
title: "The Hidden Cost of Pagination for Content Editors"
created-on: "2025-06-06T01:00:00Z"
updated-on: "2025-06-14T01:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/amara-okonkwo.json"
category: "categories/markdown.json"
---

If you work with content editors, you have probably met pagination in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
