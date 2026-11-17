---
title: "Notes on RSS Feeds for Content Editors"
created-on: "2021-03-24T23:00:00Z"
updated-on: "2021-04-24T23:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/raj-patel.json"
category: "categories/philosophy.json"
---

Most teams only notice rss feeds once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
